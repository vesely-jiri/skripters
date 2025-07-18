import styles from './Tile.module.css';
import type { TileBasicType } from './Types/TileBasicType';
import { TILE_TYPES } from '../../constants/TileTypes';

type Props = {
    data: TileBasicType;
    onSelect: () => void;
};

const Tile = ({ data, onSelect }: Props) => {

    const type = TILE_TYPES[data.type];
    if (!type) return null;

    return (
        <div 
            className={styles.tile} 
            onClick={onSelect}
            style={{ borderColor: type.color }}
        >
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
    );
};

export default Tile;
