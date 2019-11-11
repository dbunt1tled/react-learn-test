import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import toggler from "../../decorators/toggler";
import {addComment} from "../../ac";

class CommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            text: '',
        };
        this.limits = {
            user: {
                min: 3,
                max: 30,
            },
            text: {
                min: 3,
                max: 240,
            },
        };
    }

    render() {
        const {toggle, label} = this.props;
        return (
            <div style={{padding: 2 + 'em'}}>
                {<button onClick={toggle}>{label()} form</button>}
                <div>
                    {this.body}
                </div>
            </div>
        );
    }

    get body() {
        const {isOpen} = this.props;
        const {user, text} = this.state;
        if (!isOpen) {
            return false;
        }
        return (
            <form onSubmit={this.onSubmitCommentForm}>
                <label htmlFor="user">
                    user:{' '}
                    <input id="user" value={user} onChange={this.onChangeField('user')}/>
                </label>
                <label htmlFor="text">
                    text:{' '}
                    <input id="text" value={text} onChange={this.onChangeField('text')}/>
                </label>
                <button disabled={!this.validateForm()}>Add</button>
            </form>
        );
    }

    onSubmitCommentForm = (event) => {
        event.preventDefault();
        if (!this.validateForm()) {
            return false;
        }
        this.props.addComment(this.state, this.props.articleId);
    }

    onChangeField = (type) => (event) => {
        this.setState({[type]: event.target.value});
    }

    validateField = (type) => {
        const field = this.state[type];
        return field.length > this.limits[type].min && field.length < this.limits[type].max;
    }

    validateForm = () => {
        return this.validateField('user') && this.validateField('text');
    }

}

CommentForm.propTypes = {
    isOpen: PropTypes.bool,
    articleId: PropTypes.string.isRequired
}

export default connect(null,
    (dispatch, ownProps) => ({
        addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
    }))(toggler(CommentForm));
