import React, {Component} from 'react';
import Select from "react-select";
import {connect} from "react-redux";
import {filterSelect} from "../ac";
import {articlesSelectorMapToArray, selectedSelector} from "../selectors";

class SelectFilter extends Component {
    render() {
        return <Select
            options={this.options}
            value={this.props.selected}
            onChange={this.onSelectArticleChange}
            isMulti={true}
        />
    }
    onSelectArticleChange = (selected) => {
        if (!selected) {
            return false;
        }
        return this.props.filterSelect(selected);
    }
    get options() {
        return Object.values(this.props.articles).map((article) => {
            return ({
                label: article.title,
                value: article.id
            });
        });
    }
}
export default connect((storeState) => ({
    articles: articlesSelectorMapToArray(storeState),
    selected: selectedSelector(storeState)
}), {
    filterSelect
})(SelectFilter);

