import {combineReducers} from 'redux';
import CounterReducer from './counter';
import ArticlesReducer from './articles';
import FiltersReducer from './filters';
import CommentsReducer from './comments';

export default combineReducers({
    counter: CounterReducer,
    articles: ArticlesReducer,
    comments: CommentsReducer,
    filters: FiltersReducer,
});
