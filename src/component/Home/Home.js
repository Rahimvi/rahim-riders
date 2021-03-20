import React, { useEffect, useState } from 'react';
import fackData from '../../fackData/fackData.json';
import Vehicles from '../Vehicles/Vehicles';
import './Home.css';

const Home = () => {
    const [vehicles, setVehicles] = useState([])
    useEffect(()=> {
        setVehicles(fackData);
    },[])
    return (
        <div>
            <div className="vehicles">
                {
                    vehicles.map(vehicles => <Vehicles vehicles={vehicles}></Vehicles>)
                }
            </div>
        </div>
    );
};

export default Home;