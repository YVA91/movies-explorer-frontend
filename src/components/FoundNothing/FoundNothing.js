import React from 'react'
import './FoundNothing.css'

function FoundNothing ({isNothingFound}) {
    return (
        <div className={`${isNothingFound ? 'foundnothing' : 'foundnothing__none'}`}>
            <p className="foundnothing__text">Ничего не найдено</p>
        </div>
    )
};

export default FoundNothing
