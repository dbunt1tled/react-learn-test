import React from 'react';
import {connect} from "react-redux";
import {filterReset} from "../ac";

class ResetFilter extends React.Component {
    render() {
        return <button onClick={this.onFilterReset}>Reset</button>
    }
    onFilterReset = () => {
        return this.props.filterReset();
    }
}
export default connect(null, {
    filterReset
})(ResetFilter);

