export const TILE_TYPES = {
    event: {
        color: '#820080',
        label: 'Events'
    },
    condition: {
        color: '#c00000',
        label: 'Conditions'
    },
    effect: {
        color: '#0028b7',
        label: 'Effects'
    },
    expression: {
        color: '#00a108',
        label: 'Expressions'
    },
    type: {
        color: '#b77700',
        label: 'Types'
    },
    function: {
        color: '#8b8b8b',
        label: 'Functions'
    },
    section: {
        color: '#00b792',
        label: 'Sections'
    },
    structure: {
        color: '#cc00eb',
        label: 'Structures'
    },
} as const;

export type TileTypeKey = keyof typeof TILE_TYPES;