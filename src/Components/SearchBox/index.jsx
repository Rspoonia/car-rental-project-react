import React from "react";
import './Search.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
        this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    }

    componentDidMount() {
        if(window.google && window.google.maps){
        this.autocomplete = new window.google.maps.places.Autocomplete(this.autocompleteInput.current,
            { "types": ["geocode"] });

        this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
        }
    }

    handlePlaceChanged() {
        const place = this.autocomplete.getPlace();
        this.props.onLocationChange(place);
        this.getLatitudeLongitude(place.formatted_address, (latlng) => {
            this.props.onLatLngChange(latlng);
        })
    }

    getLatitudeLongitude = (address, callback) => {
        let geocoder = new window.google.maps.Geocoder();
        if (geocoder) {
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status === window.google.maps.GeocoderStatus.OK) {
                    const latitude = results[0].geometry.location.lat();
                    const longitude = results[0].geometry.location.lng();
                    callback({ lat: latitude, long: longitude });
                }
            });
        }
    }

    render() {
        return (
            <input ref={this.autocompleteInput} className='searc-box' id="autocomplete" placeholder="Enter your address"
                type="text">
            </input>
        );
    }
}

export default SearchBar;