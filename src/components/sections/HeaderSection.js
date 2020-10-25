import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class HeaderSection extends Component {
    render(){
        return (
            <header>
                <div className="header--spacer"></div>
                <div className="header--title">
                    <Link to={'/'}>
                        <h1>Noteful</h1>
                    </Link>
                </div>
            </header>
       );
    }
}

export default withRouter(HeaderSection);