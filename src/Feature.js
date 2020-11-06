import React from 'react';

function Feature ( props ) {

    return (
        <>
        <div className = {props.enabled ? "green feature" : "red feature"}>
            <p>{props.title}</p>
        </div>
        </>
    )
}

export default Feature;