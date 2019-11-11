import {STORE_COMMENT_ADD} from '../constants'
import {normalizedComments} from  '../fixtures'

const defaultComments = normalizedComments.reduce((accumulator, item) => (
    {...accumulator, [item.id]: item}
),{});
export default (commentsState = defaultComments, action) => {
    const {type, payload, uuid, error} = action;
    switch (type) {
        case STORE_COMMENT_ADD:
            return {...commentsState, ...{[uuid]: {id:uuid,...payload.comment, articleId: payload.articleId} }};
        default:
            return commentsState;
    }
}
