import type { TileTypeKey } from "../../../constants/TileTypes";

export type TileBasicType = {
    id: number;
    type: TileTypeKey;
    title: string;
    description: string;
    addon: string;
};