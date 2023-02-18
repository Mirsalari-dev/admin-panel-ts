import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from "./CheckBox.module.scss"


const CheckBox = () => {
  const [active, setActive] = useState(false)

  const { t } = useTranslation()
  return (
    <>
      <div className={classes.themeBox} onClick={() => setActive(active => !active)}>
        <div
          className={`${classes.toggle} ${active ? classes.darkMode : ""
            }`}
        ></div>
      </div>
      <p>{`${active ? t("active") : t("inactive")}`}</p>
    </>
  );
};

export default CheckBox;