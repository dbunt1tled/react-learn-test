import React, {Component} from 'react';
import ArticleListWithAccordion from "./componets/article-list";
import ArticleChart from "./componets/article-chart";
import {findDOMNode} from 'react-dom';
import Filter from "./filters";
import Counter from "./componets/counter";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItemId: null
        };
    }

    render() {
        const selectedOption = this.state.selectedItemId;
        return (
            <div>
                <h1>Hello World</h1>
                <Filter articles={[]} />
                <Counter />
                <ArticleListWithAccordion ref={this.setArticleListRef}/>
                <ArticleChart />
            </div>
        );
    }
    setArticleListRef = (ref) => {
        /*setTimeout(() => {
            ref.toggleOpenItem(articles[0].id);
            const element = findDOMNode(ref);
            console.log(`Height = ${element.clientHeight}px, Width = ${element.clientWidth}px.`);
        }, 1000);

         /**/
    }
}

export default App
