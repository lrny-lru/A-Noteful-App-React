import React from 'react'
import style from './NoteListMain.css';

class NoteListMain extends React.Component{
    render(){
        return (
            <div>

            </div>
        )
    }
}

export default function NoteListMain(props) {
    return (
        <section className="NoteListMain">
            <ul>
              {props.notes.map(note =>
                <li key={note.id}>
                  <Note 
                   id={note.id}
                   name={note.name}
                   modified={note.modified}
                  />
                </li>
                )}
            </ul>
            <div className='NoteListMain___button-container'>
                <CircleButton
                 tag={Link}
                 to='/add-note'
                 type='button'
                 className='NoteListsMain_add-note-button'>
                 <FontAwesomeIcon icon='plus'/>
                  <br/>
                  Note
                </CircleButton>
            </div>
        </section>


    )
}

NoteListMain.defaultProps = {

    notes:[],
}