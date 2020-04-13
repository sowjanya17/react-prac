import React from 'react';

import './card-styles.css';

export const Card = props => {
    console.log(props);
    return (
    <div className = 'card-container'>
        <img alt="monster" src={`https://robohash.org/${props.item.id}?set=set3&size=180x180`}></img>
        <h2>{props.item.name}</h2>
        <p>{props.item.email}</p>
    </div>
    )
}