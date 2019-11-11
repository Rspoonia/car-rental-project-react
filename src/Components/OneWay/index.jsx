import React, { Component } from 'react';
import DatePickerConponents from '../DatePicker';
import SearchBar from '../SearchBox';
import Distance from './Distance';
import './style.css';


export default class OneWay extends Component {
    state = {
        startDate: null, endDate: null, startLatLng: null, endLatLng: null,
        isOneWayTrip: true, isTwoWayTrip: false
    }
    onChangeStartDate = (startDate) => {
        this.setState({ startDate });
        console.log(startDate);
    }
    onChangeEndDate = (endDate) => {
        this.setState({ endDate });
        console.log(endDate);
    }
    bookCarHandle = () => {
        const { startDate, endDate, startLatLng, endLatLng } = this.state;
        console.log(startDate);
        console.log(endDate);
        console.log(startLatLng);
        console.log(endLatLng);
        let km;
        if(startLatLng && endLatLng)
            km = Distance(startLatLng.lat, startLatLng.long, endLatLng.lat, endLatLng.long, "K");
        console.log(km);
        this.props.totalKilometer(km);



        // Calculation a/c to question
        alert(km+" KM");
    }

    onStartLocationChange = (location) => {
        let startLoc = location;
        console.log("Start", startLoc);
    }

    onEndLocationChange = (location) => {
        let endLoc = location;
        console.log("End", endLoc);
    }

    onStartLocationLatLngChange = (startLatLng) => {
        this.setState({ startLatLng });
    }

    onEndLocationLatLngChange = (endLatLng) => {
        this.setState({ endLatLng });
    }

    twoWayClick = () => {
        this.setState({
            isTwoWayTrip: true,
            isOneWayTrip: false
        });
    }

    oneWayClick = () => {
        this.setState({
            isTwoWayTrip: false,
            isOneWayTrip: true
        });
    }

    render() {
        return (
            <div className='app-container'>
                <div className='select-button'>
                    <button className={`button-style1 ${this.state.isOneWayTrip ? "active-button" : null}`} onClick={this.oneWayClick}> One Way </button >
                    <button className={`button-style1 ${this.state.isTwoWayTrip ? "active-button" : null}`} onClick={this.twoWayClick}> Two Way </button >
                </div>

                <div className='disp-flex date-place-container'>
                    <SearchBar onLocationChange={this.onStartLocationChange} onLatLngChange={this.onStartLocationLatLngChange} />
                    <SearchBar onLocationChange={this.onEndLocationChange} onLatLngChange={this.onEndLocationLatLngChange} />
                    <div className='disp-flex date-pick'>
                        <DatePickerConponents
                            minDate={new Date()}
                            defaultDate = {new Date()}
                            selectedDate={this.state.startDate}
                            isEndDateDisable={false}
                            labelText={"Start Date"}
                            onSelectedDate={this.onChangeStartDate} />
                        <DatePickerConponents
                            minDate={this.state.startDate}
                            selectedDate={this.state.endDate}
                            labelText={"End Date"}
                            isEndDateDisable={!this.state.isTwoWayTrip}
                            onSelectedDate={this.onChangeEndDate} 
                            handleDateDisable={this.twoWayClick}/>
                    </div>
                    <button onClick={this.bookCarHandle} className='button-style'>
                        Book
                </button >
                </div>
            </div>
        )
    }
}
