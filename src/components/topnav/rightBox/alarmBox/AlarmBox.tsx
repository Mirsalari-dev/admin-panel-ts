import { Icon } from '@iconify/react';
import React, { useCallback, useContext, useRef, useState } from 'react';
import classes from "./AlarmBox.module.scss";
import { useTranslation } from 'react-i18next';
import { useOnClickOutside } from "usehooks-ts";
import LangContext from '../../../../context/langContext';



const AlarmBox = () => {
    const { t } = useTranslation()
    const alarmBoxRef = useRef<HTMLDivElement>(null);
    const [showAlarmBox, setShowAlarmBox] = useState(false);

    const { lang } = useContext(LangContext)


    const showBoxHandler = function toDo() {
        setShowAlarmBox((prev) => !prev);
    };

    const checkIfClickedOutside = useCallback(() => {
        // If the menu is open and the clicked target is not within the menu,
        // then close the menu
        if (showAlarmBox && alarmBoxRef.current) {
            setShowAlarmBox(false);
        }
    }, [showAlarmBox]);

    //custom hook - when click outside of langbox, it will close.
    useOnClickOutside(alarmBoxRef, checkIfClickedOutside);


    return (
        <div className={classes.alarm} onClick={showBoxHandler}>
            <div className={classes.alarm__icon}>
                <Icon icon="ph:bell-ringing-duotone" width="20" />
            </div>
            <div className={classes.alarm__span}>
                <span className={classes.alarm__span__text}>{t("3")}</span>
            </div>
            <div ref={alarmBoxRef} className={`${classes.alarm__menu} ${showAlarmBox ? classes.alarm__menu__show : ""}`}>
                <ul className={classes.alarm__menu__ul}>
                    <li>{t("newMessage")}
                        <Icon style={{ position: "absolute", right: "10px", top: "12px" }} icon="ph:bell-ringing-duotone" width="20" />
                    </li>
                    <li>{t("newMessage")}
                        <Icon style={{ position: "absolute", right: "10px", top: "58px" }} icon="ph:bell-ringing-duotone" width="20" />
                    </li>
                    <li>{t("newMessage")}
                        <Icon style={{ position: "absolute", right: "10px", top: "104px" }} icon="ph:bell-ringing-duotone" width="20" />
                    </li>
                </ul>
                <div className={classes.alarm__menu__allpm}>
                    {t("viewAllMessage")}
                    <div>
                        <Icon icon={lang==="en" ? "material-symbols:arrow-forward-ios-rounded" : "material-symbols:arrow-back-ios-new-rounded" } />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AlarmBox;