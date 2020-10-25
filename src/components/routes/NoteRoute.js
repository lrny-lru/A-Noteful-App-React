import React, { Component } from 'react';
import MainSection from '../sections/MainSection';
import SidebarSection from '../sections/SidebarSection';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from '../../errors/ErrorBoundary';
import PropTypes from 'prop-types';

class NoteRoute extends Component {
    render(){
        const store = {
            notes: this.props.store.notes.filter( note => this.props.history.location.pathname.includes(note.id) ),
            folders: this.props.store.folders
        }
        return (
            <div className="App">
                <ErrorBoundary message="Sidebar Section Error">
                    <SidebarSection 
                        store={store}
                    />
                </ErrorBoundary>
                <ErrorBoundary message="Main Section Error">
                    <MainSection 
                        store={store}
                    />
                </ErrorBoundary>

            </div>
       );
    }
}

NoteRoute.propTypes = {
    store: PropTypes.object.isRequired
}

export default withRouter(NoteRoute);