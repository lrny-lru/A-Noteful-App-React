import React, { Component } from 'react';
import SideBarSection from './sections/SideBarSection';
import DefaultContext from './context/DefaultContext.js';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from '../errors/ErrorBoundary';
import PropTypes from 'prop-types'

class AddFolder extends Component {
    static contextType = DefaultContext;


    handleOnSubmit = (form) =>{
        let aForm = new FormData(form);
        let name = aForm.get("folderName");
        if(typeof name!== "string" || name.length <= 0) return;
        this.addFolder({name:name});
    }

    addFolder = (data) =>{
        fetch(`${this.context.url}/folders/`, {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data);
        })
        .then(r =>{
            this.context.updateStore();
            this.props.history.push('/');
        })
        .catch( e => {
            throw new Error("Eror creating folder");
        });
    }
    render(){
        return(
            <div className="App">
                <ErrorBoundary message="Sidebar Section Error">
                    <SideBarSection
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
                                this.handleOnSubmit(e.target);
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