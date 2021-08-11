import React from 'react'

function Variables() {
    const variable = "y esto es una variable";
    const img = "https://cdn.discordapp.com/avatars/663605765474484256/c9c461729d6141298c88c71511ed00f5.png?size=1024";
    return (
        <div>
            <h2>Esto es un nuevo componente {variable}</h2>
            <img src={img} alt="img-1" />
        </div>
    )
}

export default Variables
