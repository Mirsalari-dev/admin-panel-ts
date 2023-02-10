import { Icon } from '@iconify/react';
import React from 'react';
import classes from "./AlarmBox.module.scss";


const AlarmBox = () => {
    return (
        <div className={classes.alarm}>
            <div className={classes.alarm__icon}>
                <Icon icon="ph:bell-ringing-duotone" width="20" />
            </div>
            <div>
                <span className={classes.alarm__span}>3</span>
            </div>
        </div>
    );
};

export default AlarmBox;