import React, {Component} from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {connect} from "react-redux";
import {filterRangeDate} from '../ac';
import {dateRangeSelector} from "../selectors";

class DateRange extends Component {
    render() {
        const {from, to} = this.props.range;
        const currentRange = from && to && `${from.toDateString()} - ${to.toDateString()}`;
        return (
            <div>
                <DayPicker
                    selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
                    onDayClick={this.onDayClick}
                />
                <div>{currentRange}</div>
            </div>
        );
    }
    onDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.props.range);
        this.setState(range);
        this.props.filterRangeDate(range);
    }
}
export default connect((storeState) =>({
    range: dateRangeSelector(storeState)
}), {
    filterRangeDate
} )(DateRange);
