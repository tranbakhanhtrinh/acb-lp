import React from 'react';

import classes from './TabContent.module.scss';

const tabContent = props => {
    return (
        <div className={classes.TabContent} data-tab={props.dataTab}>
            {props.content}
        </div>
    )
}

export default tabContent;