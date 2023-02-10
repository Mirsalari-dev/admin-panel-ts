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
                <ul className={classes.alarm__menu__ul}>
                    <li>یک پیغام جدید دارید
                        <Icon style={{position:"absolute",right:"10px",top:"12px"}} icon="ph:bell-ringing-duotone" width="20" />
                    </li>
                    <li>یک پیغام جدید دارید
                    <Icon style={{position:"absolute",right:"10px",top:"58px"}} icon="ph:bell-ringing-duotone" width="20" />
                    </li>
                    <li>یک پیغام جدید دارید
                    <Icon style={{position:"absolute",right:"10px",top:"104px"}} icon="ph:bell-ringing-duotone" width="20" />
                    </li>
                </ul>
                <div className={classes.alarm__menu__allpm}>
                    مشاهده همه پیام ها
                    <div>
                        <Icon icon="material-symbols:arrow-back-ios-rounded" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AlarmBox;