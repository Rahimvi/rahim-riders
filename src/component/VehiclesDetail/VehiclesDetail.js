import React, { useState } from 'react';
import './VehiclesDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserFriends } from '@fortawesome/free-solid-svg-icons'

const VehiclesDetail = (props) => {
    const {name, img, price} = props.vehicles;
    return (
        <div className="container">
                <div className="img-container mt-4 p-3 d-flex justify-content-between border">
                    <img src={img} alt=""/>
                    <h4>{name}</h4>
                    <h4><FontAwesomeIcon icon={faUserFriends}/> 4</h4>
                    <h5>${price}</h5>
                </div>
                <div className="img-container mt-4 p-3 d-flex justify-content-between border">
                    <img src={img} alt=""/>
                    <h4>{name}</h4>
                    <h4><FontAwesomeIcon icon={faUserFriends}/> 4</h4>
                    <h5>${price}</h5>
                </div>
                <div className="img-container mt-4 p-3 d-flex justify-content-between border">
                    <img src={img} alt=""/>
                    <h4>{name}</h4>
                    <h4><FontAwesomeIcon icon={faUserFriends}/> 4</h4>
                    <h5>${price}</h5>
                </div>
        </div>
    );
};

export default VehiclesDetail;