import React, { Component } from 'react';
import '../Home/Home.css';
import Slider from '../SlideShow/Slider';





export default class Home extends Component {
    render() {
        return (
            <div className='homeComponent'>
                <div className='homeHeader'>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="/">Visit Wisconsin</a>
                            </div>
                            
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="/">Home</a></li>
                                <li><a href="/dining">Dining</a></li>
                                <li><a href="/outdoors">Outdoors</a></li>
                                <li><a href="/explore">Explore</a></li>
                            </ul>
                            
                            <form className="navbar-form navbar-left">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search"/>
                                        <div className="input-group-btn">
                                            <button className="btn btn-default" type="submit">
                                                <i className="glyphicon glyphicon-search"></i>
                                            </button>
                                        </div>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>

                <div className='mainContent'>
                    <div className='slideShowContainer'>
                        <Slider/>
                    <div className='homeText'>
                        Your Greatest Adventure
                    </div>
                    <div className='homeText2'>
                        Awaits You...
                    </div>
                    </div>


                </div>
            </div>

        )
    }
}