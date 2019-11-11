import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {createCommentSelector} from "../selectors";

class Comment extends PureComponent {
    render() {
        const {comment} = this.props;
        return (
            <div>
                <h6>{comment.user}</h6>
                <div>{comment.text}</div>
            </div>

        );
    }
}

Comment.propTypes = {
    comment: PropTypes.object.isRequired
}

const createMapStateToProps = () => {
    const commentSelector = createCommentSelector();
    return (state, ownProps) => ({
        comment: commentSelector(state, ownProps)
    })
}

export default connect(createMapStateToProps)(Comment);
