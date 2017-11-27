import HoleStatsModel from '../../../models/hole-stats';

export interface HoleChangeModel {
    type: string
}

export interface SaveHoleStatsModel {
    type: string,
    stats: HoleStatsModel
}

export function incrementHole() {
    return {
        type: 'INCREMENT_HOLE'
    };
}

export function decrementHole() {
    return {
        type: 'DECREMENT_HOLE'
    };
}

export function saveHoleStats(stats: HoleStatsModel) {
    return {
        type: 'SAVE_HOLE_STATS',
        stats: stats
    }
}

