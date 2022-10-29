const IconRadioCheck = (props) => {
    return (
        <svg 
            className={props.className}
            width={props.width}
            height={props.height}
            onClick={props.onClick}
            color={props.color}
            onMouseOver={props.onMouseOver}
            onMouseOut={props.onMouseOut}
        
            fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" clip-rule="evenodd"></path>
        </svg>
    )
}

export default IconRadioCheck
            