import React, {Component} from 'react';
import Article from "./article/index";
import accordion from "../decorators/accordion";
import {connect} from 'react-redux';
import {increment} from "../ac";
import {filteredArticles} from "../selectors";

class ArticleList extends Component {
    render() {
        return (<ul>
                {this.body}
            </ul>
        );
    }

    get body() {
        const {articles, openItemId} = this.props;
        return articles.map(article => {
            return (
                <li key={article.id} className="test__article_list--item">
                    <Article
                        article={article}
                        isOpen={openItemId === article.id}
                    />
                </li>);
        });
    }

    componentDidMount() {
        const {fetchData} = this.props;
        fetchData && fetchData();
    }
}

const mapDispatchToProps = {
    handleIncrement: increment,
};

const ArticleListWithAccordion = accordion(ArticleList);

export default connect((storeState) => ({
    articles: filteredArticles(storeState),
}), mapDispatchToProps)(ArticleListWithAccordion);

// export default accordion(ArticleList);
