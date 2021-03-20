import React, { useState } from 'react';
import { useParams } from 'react-router';
import fackData from '../../fackData/fackData.json';
import Map from '../Map/Map';
import VehiclesDetail from '../VehiclesDetail/VehiclesDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowsAltV } from '@fortawesome/free-solid-svg-icons'
import './Destination.css';

const Destination = () => {
    const { vehiclesId } = useParams();
    const vehicles = fackData.find(pd => pd.id == vehiclesId);
    const [newUser, setNewUser] = useState(false);

    return (
        
        <div className="container map-container">
            {newUser? <div className="border p-5 mt-5">
                        <label for="formGroupExampleInput" className="form-label text-light bg-danger">Mirpur 1</label>
                        <br/>
                        <FontAwesomeIcon icon={faArrowsAltV}/>
                        <br/>
                        <label for="formGroupExampleInput" className="form-label text-light bg-danger">Danmondi</label>
                        <VehiclesDetail vehicles={vehicles}></VehiclesDetail>
                     </div>:<div className="form-container mt-5">
                      <form action="">
                       <label for="formGroupExampleInput" className="form-label">Pick From</label>
                       <input className="form-control" type="text" name="" id="" />
                       <label for="formGroupExampleInput" className="form-label">Pick To</label>
                       <input className="form-control" type="text" name="" id="" />
                       <br />
                       <button className="btn btn-danger" onClick={()=>setNewUser(!newUser)}>Search</button>
                   </form>
               </div>}
            <div className="google-map mt-5">
                <Map></Map>
            </div>

        </div>
    );
};

export default Destination;
