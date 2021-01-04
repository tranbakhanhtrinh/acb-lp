import React from 'react';
import classes from './MenuButton.module.scss';

const menuButton = props => {
    return (
        props.isMobile ?
            <div className={[classes.MenuButton, props.isOpen ? classes.open : null].join(' ')} onClick={props.clicked}>
                <div></div>
                <div></div>
                <div></div>
            </div> : null
    )
}

export default menuButton;