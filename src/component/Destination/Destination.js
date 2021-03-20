import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fackData from '../../fackData/fackData.json';
import VehiclesDetail from '../VehiclesDetail/VehiclesDetail';
import './Destination.css';
import mapImage from './Map.png';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const Destination = () => {
    const { vehiclesId } = useParams();
    const vehicles = fackData.find(pd => pd.id == vehiclesId);

    return (
        <div className="container map-container">
            <div className="form-container mt-5">
                <form action="">
                    <label for="formGroupExampleInput" class="form-label">Pick From</label>
                    <input className="form-control" type="text" name="" id="" />
                    <label for="formGroupExampleInput" class="form-label">Pick To</label>
                    <input className="form-control" type="text" name="" id="" />
                    <br />
                    <button className="btn btn-danger">Search</button>
                </form>
                <VehiclesDetail vehicles={vehicles}></VehiclesDetail>
            </div>
            <div className="google-map mt-5">
                <img src={mapImage} alt=""/>
            </div>

        </div>
    );
};

export default Destination;
