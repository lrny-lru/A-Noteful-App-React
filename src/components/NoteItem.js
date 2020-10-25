import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import DefaultContext from './context/DefaultContext';
import PropTypes from 'prop-types';

class NoteItem extends Component {
    static contextType = DefaultContext;
    deleteNote = () => {
        fetch(`${this.context.url}/notes/${this.props.id}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json'
            },
          })
          .then( r=>{
            this.context.updateStore();
            this.props.history.push('/');
          })
          .catch( e => {
              throw new Error(`Error deleting note: ${e.message}`);
          } );;
    }
    render(){
        const { id, name, modified, folderId, content, history } = this.props;
        const d = new Date(modified);
        
        return (
            <li data-id={folderId} className={`note--item ${history.location.pathname.includes(id) ? 'note--item--checked' : ''}`}>
                <Link 
                    className="note--item--link"
                    to={`/note/${id}`}
                >
                    {name}
                </Link>
                <div className="section--row">
                    <p className="note--item--modified">{`Date modified on ${d.toLocaleString()}`}</p>
                    <button 
                        onClick={this.deleteNote}
                        className="note--item--delete"
                    >
                        Delete Note
                    </button>
                </div>
                <p className="note--item--content hidden">{content}</p>
            </li>
       );
    }
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    modified: PropTypes.string.isRequired,
    folderId: PropTypes.string.isRequired,
    content: PropTypes.string,
    store: PropTypes.object.isRequired
}

export default withRouter(NoteItem);