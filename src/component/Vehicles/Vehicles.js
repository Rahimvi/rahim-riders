import React from 'react';
import { useHistory } from 'react-router';
import './Vehicles.css';

const Vehicles = (props) => {
    const {name, img, id} = props.vehicles;

    const history = useHistory();
    const handleClick = (vehiclesId) => {
        const url = `/destination/${vehiclesId}`
        history.push(url);
    }

    return (
        <div onClick ={() => handleClick(id)} className="text-center vehicles-img">
            <div className="card" style={{width: "15rem"}}>
                <img src={img} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h4 className="card-text">{name}</h4>
                    </div>
                </div>
            </div>
    );
};

export default Vehicles;