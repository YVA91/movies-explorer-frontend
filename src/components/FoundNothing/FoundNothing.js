import React from 'react'
import './FoundNothing.css'

function FoundNothing ({isNothingFound}) {
    
    return (
        <div className={`${isNothingFound.condition ? 'foundnothing' : 'foundnothing__none'}`}>
            <p className="foundnothing__text">{isNothingFound.text}</p>
        </div>
    )
};

export default FoundNothing
