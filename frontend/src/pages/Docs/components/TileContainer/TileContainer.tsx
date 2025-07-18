import styles from './TileContainer.module.css';
import Tile from '../Tile/Tile';
import type { TileBasicType } from '../Tile/Types/TileBasicType';

type Props = {
    tiles: TileBasicType[];
    onSelect: (id: number) => void;
};

const TileContainer = ({ tiles, onSelect }: Props) => {
    return (
        <div className={styles.container}>
            {tiles.map(tile => (
                <Tile
                    key={tile.id}
                    data={tile}
                    onSelect={() => onSelect(tile.id)}
                />
            ))}
        </div>
    );
};

export default TileContainer;