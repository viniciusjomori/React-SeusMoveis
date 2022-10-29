const IconRadioChecked = (props) => {
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
            <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
            <path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" clip-rule="evenodd"></path>
        </svg>
    )
}

export default IconRadioChecked