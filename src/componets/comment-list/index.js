import React, {Component} from 'react';
import toggler from "../../decorators/toggler";
import Comment from "../comment";
import {connect} from 'react-redux';
import CommentForm from "../comment-form";

class CommentList extends Component {
    static defaultProps = {
        article: null,
    }

    render() {
        const {article, id, toggle, label} = this.props;
        return (
            <div style={{padding: 2 + 'em'}}>
                {
                    article.hasOwnProperty('comments') &&
                    Array.isArray(article.comments) &&
                    article.comments.length > 0 && <button onClick={toggle}>{label()} comment</button>}
                <ul>
                    {this.body}
                </ul>
                <CommentForm articleId={article.id}/>
            </div>
        );
    }

    get body() {
        const {article, isOpen} = this.props;
        if (!isOpen) {
            return false;
        }
        return article.comments.map(id => {
            return (
                <li key={id}>
                    <Comment id={id}/>
                </li>);
        });
    }
}

export default toggler(CommentList);
