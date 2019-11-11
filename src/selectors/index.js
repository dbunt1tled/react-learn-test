import {createSelector} from 'reselect';

export const articlesSelector = (state) => state.articles;
export const  dateRangeSelector = (state) => state.filters.range;
export const selectedSelector = (state) => state.filters.select;
export const commentsSelector = (state) => state.comments;
export const idSelector = (_, props) => props.id;

export const articlesSelectorMapToArray = createSelector(articlesSelector, (articles) => {
    return Object.values(articles);
});

export const filteredArticles = createSelector(
    dateRangeSelector,
    selectedSelector,
    articlesSelectorMapToArray,
    (range, select, articles) => {
    return articles.filter((article) => {
        const articleDate = article ? new Date(article.date) : null;
        return (
            (!select || filterSelectArray(article, select)) &&
            ((!range.from || !range.to) || (articleDate > range.from && articleDate < range.to))
        );
    });
});

export const createCommentSelector = () => createSelector(commentsSelector, idSelector, (comments, id) =>{
    return comments[id];
});

const filterSelectArray = (item, checker) => {
    if (!checker || (Array.isArray(checker) && checker.length === 0)) {
        return true;
    }
    if (!Array.isArray(checker)) {
        checker = [checker];
    }
    return checker.some((element, index, array) => {
        return element.value === item.id;
    });
}
