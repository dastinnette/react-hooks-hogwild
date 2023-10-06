import React from "react";

function PigTile({ pig }) {
    return (
        <div>
            <p>{pig.name}</p>
            <img src={pig.image}></img>
        </div>
    )
}

export default PigTile;