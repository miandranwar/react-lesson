import React from 'react'

function Header() {
    let intro = {
        name: "Munawar's Sons",
        subtitle: "Family Business over 100years",
        date: new Date().toLocaleDateString()
    }
    return (
        <div>
            <h1>{intro.name}</h1>
            <p>{intro.subtitle}</p>
            <p>{intro.date}</p>
        </div>
    )
}

export default Header
