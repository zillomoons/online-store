const headerStyle = {
    width: '100%',
    height: '70px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'darkcyan',
    color: 'white',
    padding: '15px',
}

export const Header = () => {
    return (
        <div style={headerStyle}>
            <h3>Cart</h3>
        </div>
    )
}
