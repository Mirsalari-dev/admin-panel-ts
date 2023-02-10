import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import classes from "./AlarmBox.module.scss";
import { useTranslation } from 'react-i18next';


const AlarmBox = () => {
    const { t } = useTranslation()
    const [showAlarmBox, setShowAlarmBox] = useState(false);


    const showBoxHandler = function toDo() {
        setShowAlarmBox((prev) => !prev);
    };


    return (
        <div className={classes.alarm} onClick={showBoxHandler}>
            <div className={classes.alarm__icon}>
                <Icon icon="ph:bell-ringing-duotone" width="20" />
            </div>
            <div className={classes.alarm__span}>
                <span className={classes.alarm__span__text}>{t("3")}</span>
            </div>
            <div className={`${classes.alarm__menu} ${showAlarmBox ? classes.alarm__menu__show : ""}`}>
                <ul>
                    <li>213</li>
                    <li>123123</li>
                    <li>12312321</li>
                </ul>
            </div>


        </div>
    );
};

export default AlarmBox;