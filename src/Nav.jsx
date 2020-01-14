import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';

function Nav(props) {
    const { isLoggedin } = useContext(AuthContext);

    return (
        <div className="Nav">
            <NavLink exact to="/" className="navlink" activeClassName="active">
                Home
            </NavLink>
            <NavLink
                exact
                to="/two"
                className="navlink"
                activeClassName="active"
            >
                Page 2
            </NavLink>
            {isLoggedin ? (
                <NavLink
                    exact
                    to="/three"
                    className="navlink"
                    activeClassName="active"
                >
                    Page 3
                </NavLink>
            ) : (
                <NavLink exact to="/three">
                    Please login
                </NavLink>
            )}
        </div>
    );
}

export default Nav;
