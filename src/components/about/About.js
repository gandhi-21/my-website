import React, { Component } from 'react';
import data from '../../data/data';

class About extends Component {
    render() {
        return(
            <div>
                <div className="container centered">
                    {data.about_me.map((value, index) => {
                        return (                    <div className="card">
                            <div className="card-content">
                                <span className="card-title">Card Title</span>
                                <p className="flow-text">{value}</p>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        )
    }
}

export default About;