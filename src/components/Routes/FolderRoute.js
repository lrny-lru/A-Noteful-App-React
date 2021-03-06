import React, { Component } from 'react';
import MainSection from '../sections/MainSection';
import SidebarSection from '../sections/SideBarSection';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from '../../errors/ErrorBoundary';
import PropTypes from 'prop-types';

class FolderRoute extends Component {
    render(){
        const store = {
            notes: this.props.store.notes.filter(note => this.props.history.location.pathname.includes(note.folderId) ),
            folders: this.props.store.folders
        }
        return (
            <div className="App">
                <ErrorBoundary message ="Sidebar Sesction Error">
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

FolderRoute.propTypes = {
    store:PropTypes.object.isRequired
}

export default withRouter(FolderRoute);