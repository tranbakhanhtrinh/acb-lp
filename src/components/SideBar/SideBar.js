import React from 'react';

import classes from './SideBar.module.scss'

const sideBar = props => {
    return (
        <div className={classes.SideBar}>
            {props.children}
        </div>
    )
}

export default sideBar;