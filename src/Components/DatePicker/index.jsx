import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import './style.css'
import "react-datepicker/dist/react-datepicker.css";

export default class DatePickerConponents extends Component {

    handleonSelectedDate = date => {
        this.props.onSelectedDate(date);
    };



    render() {
        return (
            <div className='date-picker' onClick={this.props.handleDateDisable}>
                <DatePicker
                    defaultValue={this.props.defaultDate}
                    minDate={this.props.minDate}
                    placeholderText={this.props.labelText}
                    selected={this.props.selectedDate}
                    disabled={this.props.isEndDateDisable}
                    onChange={this.handleonSelectedDate}
                />
            </div>
        )
    }
}
