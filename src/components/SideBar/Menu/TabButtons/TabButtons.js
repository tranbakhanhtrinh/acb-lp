import React from 'react';

import classes from './TabButtons.module.scss'

const tabButtons = (props) => (
    <ul className={classes.TabButtons}>
        {props.children}
    </ul>
)

export default tabButtons;

