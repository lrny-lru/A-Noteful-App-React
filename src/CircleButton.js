export default function NavCircleButton(prop){
    const { tag, className, children, ...otherProps} = props 
    return React.createElement(
        props.tag,
        {
            className:['NavCircleButton', props.className].join(' ')
            ...otherProps
        },
        props.children
    )
}

NavCircleButton.defaultProps