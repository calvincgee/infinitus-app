import React from 'react';

function Feature ( props ) {

    return (
        <>
        <div className = {props.enabled ? "red feature" : "green feature"}>
            <p>{props.title}</p>
        </div>
        </>
    )
}

export default Feature;