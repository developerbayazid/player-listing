import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Player.css';

const Player = (props) => {
    const {name, phone, country, salary, playerRole, image} = props.players;
    return (
        <div className="playerInfo">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Phone: {phone}</p>
            <p>Country: {country}</p>
            <p>Salary: ${salary}</p>
            <p>Role: {playerRole}</p>
            <button  onClick={() => props.buyPlayerHandler(props.players)}><FontAwesomeIcon icon={faPlusSquare} /> Buy Player</button>
        </div>
    );
};

export default Player;