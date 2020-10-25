import React, { Component } from 'react';

class NotFoundRoute extends Component {
    render(){
        return (
            <div class="error">
                <div class="error--spacer"></div>
                <h2 class="error--message">404 Not Found</h2>
            </div>
       );
    }
}

export default NotFoundRoute;