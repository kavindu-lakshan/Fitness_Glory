import React from 'react';
import { Component } from 'react';
import Particles from 'react-particles-js';

var style = {
    width: "185.4vh",
    height: "150vh",
    backgroundColor: "black",
    marginLeft: "70px"
};

class Particle extends Component {
    render() {
        return (
            <div style={style}>
                <Particles
                    params={{
                        "particles": {
                        "number": {
                        "value": 90
                        },
                        "size": {
                        "value": 2.5
                        }
                    },
                    "interactivity": {
                    "events": {
                    "onhover": {
                    "enable": true,
                    "mode": "repulse"
                        }
                        }
                        }
                    }}/>
          </div>
        )
    }
}

export default Particle;