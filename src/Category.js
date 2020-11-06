import React, { useState } from 'react';
import Feature from './Feature';

function Category ( props ) {

    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        if (isClicked) {
            props.decrease();
        } else {
            props.increase();
        }
        setIsClicked(!isClicked);

    }

    return (
        <>
        <div>
            <button type = "button" className = "button" onClick = {handleClick}>{props.name}</button>
            <div style = {{transition: "height 2s"}}>
                <div className = {isClicked ? "show" : "hide"}>
                    {
                        props.list.map(feature => (
                            <Feature key = {feature.title} title = {feature.title} enabled = {feature.enabled}></Feature>
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    );
}

export default Category;