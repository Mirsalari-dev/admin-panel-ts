import { Icon } from '@iconify/react';
import React from 'react';
import classes from "./AlarmBox.module.scss";
import { useTranslation } from 'react-i18next';


const AlarmBox = () => {
    const { t } = useTranslation()
    return (
        <div className={classes.alarm}>
            <div className={classes.alarm__icon}>
                <Icon icon="ph:bell-ringing-duotone" width="20" />
            </div>
            <div className={classes.alarm__span}>
                <span className={classes.alarm__span__text}>{t("3")}</span>
            </div>
        </div>
    );
};

export default AlarmBox;