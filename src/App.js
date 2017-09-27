import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation'
import Hero from './components/hero/Hero'
import Cards from './components/cards/Cards'
import Table from './components/table/Table'
import Footer from './components/footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Hero />
        <div className="cards">
          <Cards imgsrc="/assets/images/spain_flag.svg" country="Spain" website="http://www.spain.info/en_US/" linktext="Spain Tourism Site"/>
          <Cards imgsrc="/assets/images/italy_flag.svg" country="Italy" website="http://www.italia.it/en/home.html" linktext="Italy Tourism Site"/>
          <Cards imgsrc="/assets/images/aruba_flag.svg" country="Aruba" website="http://www.arubatourism.com/" linktext="Aruba Tourism Site"/>
          <Cards imgsrc="/assets/images/chile_flag.svg" country="Chile" website="http://chile.travel/en/" linktext="Chile Tourism Site"/>
        </div>
        <div>
          <h3>Some information about the places I would like to visit</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Destination</th>
                <th>Capital</th>
                <th>Official Language</th>
                <th>Population (aprox.)</th>
                <th>National Bird</th>
              </tr>
            </thead>
            <tbody>
              <Table destination="Spain" capital="Madrid" language="Spanish" population="46.77 million" bird="Eagle"/>
              <Table destination="Italy" capital="Rome" language="Italian" population="59.83 million" bird="Bluebirds"/>
              <Table destination="Aruba" capital="Oranjestad" language="Dutch" population="102,911" bird="Aruban Burrowing Owl"/>
              <Table destination="Chile" capital="Santiago" language="Spanish" population="17.62 million" bird="Andean condor"/>
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
