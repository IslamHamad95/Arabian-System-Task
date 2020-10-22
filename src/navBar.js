import React from 'react';
import {NavLink} from "react-router-dom";

const Header=()=>{

    return (
        <header className="header">
        <NavLink to="/Posts" activeClassName="is-active">Posts</NavLink>
        <NavLink to="/ToDos" activeClassName="is-active">ToDo</NavLink>
        </header>

    )

}

export default Header