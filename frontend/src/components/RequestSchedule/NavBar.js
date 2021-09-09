import React, {Component} from 'react';

export default class NavBar extends Component {
    render(){
        return(
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#e3f2fd'}}>
                    <div className="container-fluid">
                       

                        <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" arial-label="Toggle navigation">
                            <span className="navbar-toggle-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item>">
                                    <a className="nav-link" aria-current="page" href="/">Requests</a>
                                </li>

                            </ul>
                        </div>
                        
                    </div>
                </nav>
        )
        
    }
        
}