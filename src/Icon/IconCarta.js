const IconCarta = (props) => {
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
            <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-.67 2L12 10.75 5.67 6h12.66ZM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 1.2 0L20 7.25V17a1 1 0 0 1-1 1Z"></path>
        </svg>
    )
}

export default IconCarta