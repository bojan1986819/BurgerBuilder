import React from 'react';

import classes from './BuildControl.css';

const buildControl =(prop)=>(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{prop.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
);

export default buildControl;