import React from 'react';
import './App.css';
import OneWay from './Components/OneWay';
import Bottom from './Components/Footer/Bottom';
import LoginForm from './Components/Login Data'


class App extends React.Component {
  state = {

    totalKM: 0,
    isFormSubmit: false
  }

  totalKilometer = (km) => {
    console.log(km)
    this.setState({
      isFormSubmit: true,
      totalKM: km
    })
  }

  render() {
    return (
      <div >
        {!this.state.isFormSubmit
          ? <div className="App">
            <section >
              <img className="head-src" src="https://instacar.in/wp-content/themes/instacar/images/Insta-car-01-2.png" alt="instacar-logo" />
              <p className="support24x7-time" >24X7 Support</p>
              <p className="support24x7-number">+91-9902202299</p>
              <h1 className='head-tag'>Chauffeur Driven, On Demand.</h1>
            </section>

            <OneWay totalKilometer={this.totalKilometer} />
          </div>
          : <LoginForm totalKilometer={this.state.totalKM} />}
        <Bottom />
      </div>
    );
  }
}

export default App;
