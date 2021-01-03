import React from 'react';

import classes from './NavigationItem.module.scss'

const navigationItem = props => (
    props.isActive === props.dataTab ?
        <li style={props.style} className={[classes.NavigationItem, classes.TabActive].join(' ')} onClick={props.clickedToActivateTab} onMouseEnter={props.hoverOn} onMouseLeave={props.hoverOut} data-tab={props.dataTab}>
            {/* <img src={props.menuIcon} alt={props.altMenuIcon} className={classes.MenuIcon} /> */}
            {props.menuText}
        </li>
        :
        <li style={props.style} className={classes.NavigationItem} onClick={props.clickedToActivateTab} onMouseEnter={props.hoverOn} onMouseLeave={props.hoverOut} data-tab={props.dataTab}>
            {/* <img src={props.menuIcon} alt={props.altMenuIcon} className={classes.MenuIcon} /> */}
            {props.menuText}
        </li>
)

export default navigationItem;