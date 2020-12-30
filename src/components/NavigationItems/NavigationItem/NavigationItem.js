import React from 'react';

import classes from './NavigationItem.module.scss'

const navigationItem = props => (
    <li className={classes.NavigationItem} onClick={props.clickedToActivateTab}>
        <div className={classes.MenuIcon}>
            <img src={props.menuIcon} alt={props.altMenuIcon} />
        </div>
        <div>
            {props.menuText}
        </div>
    </li>
)

export default navigationItem;