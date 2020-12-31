import React from 'react';

import classes from './Logo.module.scss';

const logo = props => (
    <div className={classes.BgWhite}>
        <img src={props.imgSrc} className="d-block img-fluid mx-auto" alt={props.alt} />
    </div>
)

export default logo;