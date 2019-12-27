import React, { Component } from 'react';
import data from '../../data/data.json';
import header from '../../media/header.jfif'

class Home extends Component {
    render() {
        return(
            <div>
                <div className="container centered">
                   <div className="row">
                       <div className="col s12 m8 l9">
                           <img src={header} alt="" className="responsive-img" style={{borderRadius: "8px"}}/>
                           <p className="flow-text">Hi! I'm {data.name}.
                               I'm currently a {data.year} at {data.college}, majoring in {data.major} and interested in {data.interests}.
                               When I'm not coding I'm usually listening to music, watching football or at the gym. I currently live on RedBull, Coffee and Halal Combo over Rice.</p>
                       </div>
                   </div>
                    <div className="divider"></div>
                    <div className="about">About</div>
                    <div className="work">Work</div>
                    <div className="project">Project</div>
                    <div className="contact">Contact</div>
                </div>
            </div>
        )
}
}

export default Home;