import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                <li data-target="#carousel-example-generic" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="item active">
                    <img src="http://cdn.clcworld.com/wp-content/uploads/2016/08/31113857/clcworldtravel_hero_image02.jpg" alt="..."/>
                     <div className="carousel-caption">
                        <h1>Welcome to my travel site</h1>
                        <h2>This site is about places I would like to travel</h2>
                        <h3>Here are some places I would like to visit</h3>
                    </div>
                </div>
                <div className="item">
                    <img src="https://i.warosu.org/data/fa/img/0089/31/1413050397565.jpg" alt="..."/>
                    <div className="carousel-caption">
                        <h1>Welcome to my travel site</h1>
                        <h2>This site is about places I would like to travel</h2>
                        <h3>Here are some places I would like to visit</h3>
                    </div>
                </div>
                <div className="item">
                    <img src="https://jellyjourneys.com/wp-content/uploads/2017/09/hero_img_blog_jelly-hk-1_no-text-2000x667.jpg" alt="..."/>
                    <div className="carousel-caption">
                        <h1>Welcome to my travel site</h1>
                        <h2>This site is about places I would like to travel</h2>
                        <h3>Here are some places I would like to visit</h3>
                    </div>
                </div>
                <div className="item">
                    <img src="https://jellyjourneys.com/wp-content/uploads/2017/09/hero_img_blog_jelly-philippines-island-hopping-1_no-text-2000x667.jpg" alt="..."/>
                    <div className="carousel-caption">
                        <h1>Welcome to my travel site</h1>
                        <h2>This site is about places I would like to travel</h2>
                        <h3>Here are some places I would like to visit</h3>
                    </div>
                </div>
            </div>
            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
  }
}

export default Hero;