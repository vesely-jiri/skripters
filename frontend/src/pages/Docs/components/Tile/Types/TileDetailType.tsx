import type { TileTypeKey } from "../../../constants/TileTypes";

export type TileDetailType = {
    id: number;
    type: TileTypeKey;
    title: string;
    description: string;
    syntaxes: string[];
    event_values: string[];
    addon: string;
    addon_version: string;
    usable_in: string[];
    since: string;   
}