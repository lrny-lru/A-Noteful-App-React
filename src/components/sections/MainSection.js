import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import NoteItem from '../NoteItem';
import DefaultContext from '../context/DefaultContext';
import PropTypes from 'prop-types';

class MainSection extends Component {
    static contextType = DefaultContext;

    getNoteList = () => {
        if ( typeof this.props.store !== "object" ) return;
        
        return this.props.store.notes.map(note => {
            return (
                <NoteItem
                    key={note.id}
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                    folderId={note.folderId}
                    content={note.content}
                />
            );
        });
    }
    getBottomContents = () => {
        if ( !this.props.history.location.pathname.includes(`/note/`) ) return (
            <Link 
                to={`/add-note/`}
                className="note--item--add"
            >
                Add Note
            </Link>
        );
        return (<p className="note--item--content">{this.props.store.notes[0].content}</p>);
    }
    render(){
        return (
            <main className="section--main">
                <ul>
                    {this.getNoteList()}
                </ul>
                <div className="section--row">
                    {this.getBottomContents()}
                </div>
            </main>
       );
    }
}

MainSection.propTypes = {
    store: PropTypes.object.isRequired
}

export default withRouter(MainSection);