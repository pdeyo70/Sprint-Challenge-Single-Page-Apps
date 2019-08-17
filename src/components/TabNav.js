import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import AppRouter from './AppRouter';

// TODO: Add missing tabs below
export default function TabNav() {
    return (
        <Menu>
            <NavLink className='navTab' to='/Characters'>Characters</NavLink>
            <NavLink className='navTab' to='/Locations'>Locations</NavLink>
            <NavLink className='navTab' to='/Episodes'>Episodes</NavLink>
        </Menu>
    )

};
