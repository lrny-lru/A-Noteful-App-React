import React from 'react'

class Note extends React.Component{
    render(){
        return (
            <div>

            </div>
        )
    }
}

export default function Note(props) {
    return(
        <div className='Note'>
            <h2 className='Note__title'>
                <Link to={`/note/${props.div}`}>
                    {props.name}
                </Link>
            </h2>
            <button className='Note__delete' type='button'>
                <FontAwesomeIcon icon='trash-alt' />
                {' '}
                remove
            </button>
            <div className='Note__dates'>
                <div className='Note__dates-modified'>
                    Modified 
                    {' '}
                    <span className='Date'>
                        {FormData(props.modified, 'Do MM YYYY')}
                    </span>
                </div>
            </div>
        </div>
    )
}