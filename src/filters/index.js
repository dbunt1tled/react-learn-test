import React, {Component} from 'react';
import SelectFilter from "./select";
import DateRange from "./date-range";
import ResetFilter from "./reset";

class Filter extends Component {
    render() {
        const {articles} = this.props;
        return (
            <div>
                <SelectFilter articles={articles} />
                <DateRange/>
                <ResetFilter />
            </div>
        );
    }
}

export default Filter;
