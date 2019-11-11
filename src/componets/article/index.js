import React, {PureComponent} from 'react';
import toggler from "../../decorators/toggler";
import CommentList from "../comment-list";
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group';
import './style.css';
import {articleDelete} from '../../ac';
import {connect} from 'react-redux';

class Article extends PureComponent{

    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired,
        isOpen: PropTypes.bool,
        toggle: PropTypes.func.isRequired,
        label: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        console.error(error);
        this.setState({hasError:true});
    }

    render() {
        const {article, isOpen, toggle, label} = this.props;
        return(
            <div>
                <div>
                    <h3 ref={this.setTitleRef}>{article.title}</h3>
                    <button onClick={toggle} className="test__article--btn">{label()} description</button>
                </div>
                <CSSTransition
                    transitionName="article"
                    transitionEnterTimeout = {500}
                    transitionLeaveTimeout = {300}
                >
                    {this.body}
                </CSSTransition>
            </div>
        );
    }
    get body() {
        const {article, isOpen, toggle, label} = this.props;
        if (!isOpen) {
            return null;
        }
        if (this.state.hasError) {
            return (
                <div>In component occurs error</div>
            );
        }
        return (
            <div className="test__article--body">
                <section>{article.text}</section>
                <button onClick={this.handleDeleteArticle}>delete</button>
                <CommentList article={article} />
            </div>
        );
    }

    handleDeleteArticle = () => {
        this.props.deleteArticle(this.props.article.id);
    }

    setTitleRef(ref) {
        return false;//console.log(ref);
    }
}

export default connect(null, {
    deleteArticle: articleDelete
})(toggler(Article));
