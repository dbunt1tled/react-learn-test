import {
    STORE_FILTER_RANGE_DATE,
    STORE_FILTER_SELECT,
    STORE_FILTER_RESET
} from '../constants'
const defaultFiltersState = {
    select: null,
    range: {
        from: null,
        to: null,
    },
}

export default (filtersState = defaultFiltersState, action) => {
    const {type, payload, response, error} = action;
    switch (type) {
        case STORE_FILTER_SELECT:
            return {
                ...filtersState,
                ...{select: payload}
            };
        case STORE_FILTER_RANGE_DATE:
            return {
                ...filtersState,
                ...{range: payload}
            };
        case STORE_FILTER_RESET:
            return defaultFiltersState;
        default:
            return filtersState;
    }
}
