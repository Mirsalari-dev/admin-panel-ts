import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from "./CheckBox.module.scss"

interface Props {
  contentActive?: string
  contentInActive?: string

}


const CheckBox: React.FC<Props> = (props) => {
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
      {/* <p>{`${active ? t(`${props.contentActive}`) : t(`${props.contentActive}`)}</p> */}
      <p>{`${active ? t(`${props.contentActive}`) :t(`${props.contentInActive}`) }`}</p>
    </>
  );
};

export default CheckBox;