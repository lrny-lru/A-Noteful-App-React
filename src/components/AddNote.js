import React, { Component } from 'react';
import SidebarSection from './sections/SidebarSection';
import DefaultContext from './context/DefaultContext';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from '../errors/ErrorBoundary';
import PropTypes from 'prop-types';

class AddNote extends Component {
    static contextType = DefaultContext;
    handleOnSumbit = (form) => {
        let f = new FormData(form);
        let data = {
            name: f.get("noteName"),
            modified: new Date().toISOString(),
            content: f.get("noteContent"),
            folderId: f.get("folderId")
        }
        this.addNote(data);
    }
    addNote = (data) => {
        fetch(`${this.context.url}/notes/`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then( r=>{
            this.context.updateStore();
            this.props.history.push('/');
        })
        .catch( e => {
            throw new Error("Error creating note");
        } );
    }
    getFolderList = () => {
        if ( typeof this.props.store !== "object" || this.props.history.location.pathname.includes("/note/") ) return;

        return this.props.store.folders.map( (folder,i) => {
            return (
                <option
                    key={i}
                    value={folder.id}
                >
                    {folder.name}
                </option>
            );
        });
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
                                <label htmlFor="noteName">Name:</label>
                                <input type="text" id="noteName" name="noteName" required />
                            </div>
                            <div className="add--form--field">
                                <label htmlFor="noteContent">Content:</label>
                                <textarea id="noteContent" name="noteContent" required></textarea>
                            </div>
                            <div className="add--form--field">
                                <label htmlFor="folderId">Folder:</label>
                                <select name="folderId" id="folderId" required>
                                    {this.getFolderList()}
                                </select>
                            </div>
                            <div className="add--form--field">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </main>
                </ErrorBoundary>
            </div>
        )
    }
}

AddNote.propTypes = {
    store: PropTypes.object.isRequired
}

export default withRouter(AddNote);