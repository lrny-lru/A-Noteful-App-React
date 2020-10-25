import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FolderItem from '../FolderItem';
import DefaultContext from '../context/DefaultContext';
import PropTypes from 'prop-types';

class SidebarSection extends Component {
    static contextType = DefaultContext;
    getFolderList = () => {
        if ( typeof this.props.store !== "object" || this.props.history.location.pathname.includes("/note/") ) return;
        return this.props.store.folders.map(folder => {
            return (
                <FolderItem
                    key={folder.id}
                    id={folder.id}
                    name={folder.name}
                    store={this.props.store}
                />
            );
        });
    }
    getLowerButton = () => {
        if ( !this.props.history.location.pathname.includes("/note/") ) {
            return (
            <Link 
                to={`/add-folder/`}
                className="folder--item--add"
            >
                Add Folder
            </Link>);
        }

        return (<Link 
                    to={`/`}
                    className="button--back"
                >
                    Go back
                </Link>
        );
    }
    getFolderName = () => {
        if (this.props.history.location.pathname.includes("/note/")) {
            let folder = this.props.store.folders.find( folder => {
                return folder.id === this.props.store.notes[0].folderId
            } );
            return (
                <h3>Folder: {folder.name}</h3>
            )
        }
    }
    render(){
        return (
            <section className="section--sidebar">
                <ul>
                    {this.getFolderList()}
                </ul>
                {this.getLowerButton()}
                {this.getFolderName()}
            </section>
       );
    }
}

SidebarSection.propTypes = {
    store: PropTypes.object.isRequired
}

export default withRouter(SidebarSection);
