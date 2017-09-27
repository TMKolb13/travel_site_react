import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {
  render() {
    return (
        <div id="cards" className="row">
            <div className="content">
                <img className="flag" src={this.props.imgsrc} />
                <h3>{this.props.country}</h3>
                <a href={this.props.website} target="_blank">{this.props.linktext}</a>
            </div>
        </div>
    );
  }
}

export default Cards;