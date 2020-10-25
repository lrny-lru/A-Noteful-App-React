import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import DefaultContext from './context/DefaultContext';
import PropTypes from 'prop-types';

class FolderItem extends Component {
    static contextType = DefaultContext;

    deleteNote = (id) => {
        fetch(`${this.context.url}/notes/${id}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json'
            },
          })
          .then( r=>{
            this.context.updateStore();
          })
          .catch( e => {
              throw new Error(`Error deleting note: ${e.message}`);
          } );;
    }
    deleteFolder = (id) => {
        fetch(`${this.context.url}/folders/${id}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json'
            },
        })
        .then( r => {
            this.context.updateStore();
            this.props.history.push('/');
        } )
        .catch( e => {
            throw new Error(`Error deleting folder: ${e.message}`);
        } );;
    }
    getRidOfMe = () => {
        // remove all notes with this folder id
        this.props.store.notes.forEach( note => {
            if ( note.folderId === this.props.id ) this.deleteNote( note.id );
        } );
        // remove this folder
        this.deleteFolder( this.props.id );
    }

    render(){
        const { id, name, history } = this.props;

        return (
            <li key={id} className={`folder--item ${history.location.pathname.includes(id) ? 'folder--item--checked' : ''}`}>
                <Link 
                    to={`/folder/${id}`}
                >
                    {name}
                </Link>
                <button 
                className="folder--item--delete"
                onClick={()=>this.getRidOfMe()}>delete</button>
            </li>
       );
    }
}

FolderItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired
}

export default withRouter(FolderItem);
