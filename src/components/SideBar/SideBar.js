import React from 'react';
import logo from '../../assets/images/logo.svg';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './SideBar.module.scss'

const sideBar = props => {
    return (
        <div className={classes.SideBar}>
            <Logo imgSrc={logo} alt="Logo" />
            <Menu>
                <NavigationItems />
            </Menu>
        </div>
    )
}

export default sideBar;