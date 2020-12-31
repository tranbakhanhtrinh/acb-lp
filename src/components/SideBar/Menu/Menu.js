import React from 'react';

import classes from './Menu.module.scss'

const menu = props => (
    <div className={classes.Menu}>
        <ul>
            {props.children}
        </ul>
    </div>
)

export default menu;