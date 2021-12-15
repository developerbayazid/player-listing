import React from 'react';
import './PurchasedPlayer.css';

const PurchasedPlayer = (props) => {
    const {name, phone, country, salary, playerRole, image} = props.addPlayer;
    return (
        <tr>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{country}</td>
            <td>${salary}</td>
            <td>{playerRole}</td>
            <td className="playerPhoto"><img src={image} alt={name} /></td>
        </tr>
    );
};

export default PurchasedPlayer;