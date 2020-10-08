import React, { Component } from 'react';

class NotFoundRoute extends Component {
    render(){
        return (
            <div className="error">
                <div className="error-spacer"></div>
                <h2 className="error--message">404 Not Found</h2>
            </div>
        );
    }
}

export default NotFoundRoute;