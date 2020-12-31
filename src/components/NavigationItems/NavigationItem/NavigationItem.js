import React from 'react';

import classes from './NavigationItem.module.scss'

const navigationItem = props => (
    props.isActive === props.dataTab ?
        <li className={[classes.NavigationItem, classes.TabActive].join(' ')} onClick={props.clickedToActivateTab} data-tab={props.dataTab}>
            <div className={classes.MenuIcon}>
                <img src={props.menuIcon} alt={props.altMenuIcon} />
            </div>
            <div>
                {props.menuText}
            </div>
        </li>
        :
        <li className={classes.NavigationItem} onClick={props.clickedToActivateTab} data-tab={props.dataTab}>
            <div className={classes.MenuIcon}>
                <img src={props.menuIcon} alt={props.altMenuIcon} />
            </div>
            <div>
                {props.menuText}
            </div>
        </li>
)

export default navigationItem;