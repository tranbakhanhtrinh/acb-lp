import React from 'react';

import classes from './Social.module.scss'

const social = props => {
    return (
        <a href={props.href} target={props.target} className={classes.Social}>
            <img src={props.src} alt={props.alt} />
        </a>
    )
}

export default social;