import React from "react";
import ThemeBox from "./themeBox/ThemeBox";
import LangBox from "./langBox/LangBox";
import Profile from "./profile/Profile";

import classes from "./TopNavRightBox.module.scss";
import AlarmBox from "./alarmBox/AlarmBox";

function TopNavRightBox() {
  return (
    <div className={classes.topNavBox_right}>
      <div className={classes.wrapper}>
      <AlarmBox />
        <LangBox />
        <ThemeBox />
      </div>
      <Profile />
    </div>
  );
}

export default TopNavRightBox;
