import React, { Component } from 'react';
import SidebarSection from './sections/SidebarSection';
import DefaultContext from './context/DefaultContext';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from '../errors/ErrorBoundary';
import PropTypes from 'prop-types';

class AddFolder extends Component {
    static contextType = DefaultContext;
    handleOnSumbit = (form) => {
        let f = new FormData(form);
        let name = f.get("folderName");
        if ( typeof name !== "string" || name.length <= 0 ) return;
        this.addFolder({name:name});
    }
    addFolder = (data) => {
        fetch(`${this.context.url}/folders/`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then( r => {
            this.context.updateStore();
            this.props.history.push('/');
        } )
        .catch( e => {
            throw new Error("Error creating folder");
        } );
    }
    render() {
        return (
            <div className="App">
                <ErrorBoundary message="Sidebar Section Error">
                    <SidebarSection 
                        store={this.props.store}
                        history={this.props.history}
                    />
                </ErrorBoundary>
                <ErrorBoundary message="Main Section Error">
                    <main className="section--main">
                        <form
                            className="add--form"
                            onSubmit={(e)=>{
                                e.preventDefault();
                                this.handleOnSumbit(e.target);
                            }}
                        >   
                            <div className="add--form--field">
                                <label htmlFor="folderName">Folder name:</label>
                                <input type="text" id="folderName" name="folderName" required />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </main>
                </ErrorBoundary>
            </div>
        )
    }
}

AddFolder.propTypes = {
    store: PropTypes.object.isRequired
}

export default withRouter(AddFolder);