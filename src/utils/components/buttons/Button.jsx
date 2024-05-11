export const Button = ({variant, type, click, full, children}) => {
    return(
        <>
        <button className={variant} type={type} onClick={click} style={{width: full}} >
            {children}
        </button>
        </>
    )
}