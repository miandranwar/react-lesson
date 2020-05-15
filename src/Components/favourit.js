import React from 'react'

function Favourit() {
    let mymovies = ['ABC','EDF', 'GHI', 'JKL']
    return (
        <div>
            <h1>My favourit Movies</h1>
            <ol>
                {mymovies.map((num) => {
                    return <li>{num}</li>
                })}
            </ol>
        </div>
    )
}

export default Favourit