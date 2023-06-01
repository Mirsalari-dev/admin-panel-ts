import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import classes from "./CheckBox.module.scss";

interface Props {
  contentActive?: string;
  contentInActive?: string;
  onClick?: any;
  active?: string;
}

const CheckBox: React.FC<Props> = (props) => {
  // const [active, setActive] = useState(false);

  const { t } = useTranslation();
  return (
    <div style={{ display: "flex" }}>
      <div
        className={classes.themeBox}
        onClick={props.onClick}
      >
        <div
          className={`${classes.toggle} ${props.active=="Confirmed" ? classes.darkMode : ""}`}
        ></div>
      </div>
      {/* <p>{`${active ? t(`${props.contentActive}`) : t(`${props.contentActive}`)}</p> */}
      <p>{`${
        props.active=="Confirmed" ? t(`${props.contentActive}`) : t(`${props.contentInActive}`)
      }`}</p>
    </div>
  );
};

export default CheckBox;
