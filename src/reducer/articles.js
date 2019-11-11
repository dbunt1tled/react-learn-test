import {
    STORE_ARTICLE_DELETE,
    STORE_COMMENT_ADD
} from '../constants'
import {normalizedArticles} from '../fixtures'

// const defaultArticles = normalizedArticles;
const defaultArticles = normalizedArticles.reduce((accumulator, item) => (
    {...accumulator, [item.id]: item}
),{});

export default (articlesState = defaultArticles, action) => {
    const {type, payload, uuid, response, error} = action;
    switch (type) {
        case STORE_ARTICLE_DELETE:
            const newStateForDelete = {...articlesState};
            delete newStateForDelete[payload.id];
            return newStateForDelete;
        case STORE_COMMENT_ADD:
            const article = articlesState[payload.articleId];
            return {...articlesState, [payload.articleId]: {
                    ...article,
                    comments: (article.comments || []).concat(uuid)
                }
            };
        default:
            return articlesState;
    }
}
