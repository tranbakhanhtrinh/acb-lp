import React from 'react';

import classes from './Menu.module.scss'

const menu = props => (
    <div className={classes.Menu}>
        {props.children}
    </div>
)

export default menu;