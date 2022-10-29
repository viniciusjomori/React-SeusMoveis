const IconBtoA = (props) => {
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
            <path fill-rule="evenodd" d="M5.6.05a.75.75 0 0 1 .53.22l4.8 4.8-1.06 1.06-3.52-3.52V24h-1.5V2.61L1.33 6.13.27 5.07l4.8-4.8A.75.75 0 0 1 5.6.05Zm12.8 1.5A2.45 2.45 0 0 0 15.95 4v2.45h4.9V4a2.45 2.45 0 0 0-2.45-2.45Zm2.45 6.4v3.25h1.5V4a3.95 3.95 0 0 0-7.9 0v7.2h1.5V7.95h4.9Zm-6.4 4.9h4.75a3.15 3.15 0 0 1 2.04 5.55 3.15 3.15 0 0 1-2.04 5.55h-4.75v-11.1Zm4.75 4.8a1.65 1.65 0 1 0 0-3.3h-3.25v3.3h3.25Zm-3.25 1.5h3.25a1.65 1.65 0 0 1 0 3.3h-3.25v-3.3Z" clip-rule="evenodd"></path>
        </svg>
    )
}

export default IconBtoA