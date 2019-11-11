import {
    STORE_COUNTER_INCREMENT,
    STORE_ARTICLE_DELETE,
    STORE_FILTER_RANGE_DATE,
    STORE_FILTER_SELECT,
    STORE_FILTER_RESET,
    STORE_COMMENT_ADD
} from '../constants';

export function increment() {
    return {
        type: STORE_COUNTER_INCREMENT
    }
}
export function articleDelete(id) {
    return {
        type: STORE_ARTICLE_DELETE,
        payload: {id: id}
    }
}
export function filterSelect(data) {
    return {
        type: STORE_FILTER_SELECT,
        payload: data
    }
}
export function filterRangeDate(daysRange) {
    return {
        type: STORE_FILTER_RANGE_DATE,
        payload: daysRange
    }
}
export function filterReset() {
    return {
        type: STORE_FILTER_RESET,
    }
}

export function addComment(comment, articleId) {
    return {
        type: STORE_COMMENT_ADD,
        payload: { comment, articleId },
        getUuid: true
    }
}
