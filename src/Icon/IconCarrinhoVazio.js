const IconCarrinhoVazio = (props) => {
    return (
        <svg 
            className={props.className}
            width={props.width}
            height={props.height}
            onClick={props.onClick}
            color={props.color}
            onMouseOver={props.onMouseOver}
            onMouseOut={props.onMouseOut}
            
            fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
            <path d="M17 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
            <path d="M17 17H6V3H4"></path>
            <path d="M19.429 10.001 19 13H6"></path>
            <path d="m6 5 7.999.571"></path>
            <path d="m17 3 4 4"></path>
            <path d="m21 3-4 4"></path>
        </svg>
    )
}

export default IconCarrinhoVazio