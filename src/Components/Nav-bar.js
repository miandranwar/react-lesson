import React from 'react'

function Navbar() {
    let style ={
        margin: '20px',
        fontSize: '20px',
        color: 'white',
        textDecoration: 'none',
        
    }
    let menu = ['Home', 'Shopping', 'About us', 'Feedback']
    let menubar = menu.map((tab) => {
        return <a href="/" style={style}>{tab}</a>
    });

    
    return (
        <div>
            {menubar}
        </div>
    )
}

export default Navbar
