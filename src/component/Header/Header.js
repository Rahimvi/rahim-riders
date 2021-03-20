import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light container">
                <div className="container-fluid">
                    <div>
                    <h2 className="navbar-brand">Rahim Riders</h2>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/home" className="nav-link text-dark fw-bold" aria-current="page">Home</Link>
                            <Link to="/destination" className="nav-link text-dark fw-bold">Destination</Link>
                            <Link className="nav-link text-dark fw-bold" href="#">Blog</Link>
                            <Link to="/contact" className="nav-link text-white bg-secondary" tabindex="-1" aria-disabled="true">Login</Link>
                            <p className="nav-link">{loggedInUser.email}</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;