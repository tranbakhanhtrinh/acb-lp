import React from 'react';

const tabContent = props => {
    return (
        <p data-tab={props.dataTab}>{props.content}</p>
    )
}

export default tabContent;