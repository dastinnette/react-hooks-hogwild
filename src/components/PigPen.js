import React from "react";
import PigTile from "./PigTile"

function PigPen({ pigs }) {
    
    const pigTileComponents = pigs.map((pigObj) => {
        return <PigTile key={pigObj.name} pig={pigObj} />
    })
    
    return (
        <div>
            { pigTileComponents }
        </div>
    )
}

export default PigPen;