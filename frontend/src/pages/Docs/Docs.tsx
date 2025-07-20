import TypeFilterMenu from './components/TypeFilter/TypeFilterMenu';
import Logo from '../../components/logo/Logo';
import TileContainer from './components/TileContainer/TileContainer';
import { useTiles } from '../../hooks/useTiles';

import styles from './Docs.module.css';

const Docs = () => {
    //TODO: add selectedTile
    const { tiles, selectTile } = useTiles();

    return (
        <>
            <div className={styles.TypeFilterMenu}>
                <TypeFilterMenu />
            </div>

            <div className={styles.logo}>
                <Logo subtitle="Docs" />
            </div>

            <div className={styles.searchBar}>
                <input type="text" placeholder="Search..." />
            </div>

            <div className={styles.TileContainer}>
                <TileContainer tiles={tiles} onSelect={selectTile} />
            </div>

            {/* Zde později např. modal nebo panel */}
            {/* {selectedTile && <TileDetailModal tile={selectedTile} onClose={() => ...} />} */}
        </>
    );
};

export default Docs;
