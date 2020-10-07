import React from 'react'

class NotefulForm extends React.Component{
    render(){
        return (
            <div>

            </div>
        )
    }
}

export default function NotefulForm(props) {
    const { className, ...otherProps } = props
    return (
        <form
            className={['Noteful-form', className].join(' ')}
            action='#'
            {...otherProps}
        />
    )
}