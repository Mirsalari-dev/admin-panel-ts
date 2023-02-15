import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from "./Sidebar.module.scss";
import { Icon } from "@iconify/react";
import { useWindowSize } from 'usehooks-ts';
import sidebarNav from '../../config/sidebarNav';
import SidebarContext from '../../context/sidebarContext';
import logo from "../../assets/images/logo.svg"
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';
import LangContext from '../../context/langContext';


const Sidebar = () => {
  const [showHandler, setShowHandler] = useState(false);
  const [accordionHeight, setAccordionHeight] = useState("0px");
  const [marginBottom, setMarginBottom] = useState("0px");

  const { width } = useWindowSize();
  const sidebarCtx = useContext(SidebarContext);
  const { lang } = useContext(LangContext)
  const { t } = useTranslation()
  const contentRef = useRef<any>(null);


  function openSidebarHandler() {
    //for width>768(tablet size) if sidebar was open in width<768 was opened too.
    //just in case of tablet size and smaller then, sidebar__open can added.
    if (width <= 768) document.body.classList.toggle("sidebar__open");
  }

  function logoutHandler() {
    openSidebarHandler();
  }

  const clickHandler = () => {
    setShowHandler(showHandler => !showHandler)
    setAccordionHeight(
      showHandler ? "0px" : `${contentRef.current.scrollHeight}px`
    );
    setMarginBottom(
      showHandler ? "0px" : `${contentRef.current.scrollHeight}px`
    );
  }



  useEffect(() => {
    if (!sidebarCtx.isOpen) {
      setShowHandler(false)
      setAccordionHeight("0px")
      setMarginBottom("0px")
    }
  }, [sidebarCtx.isOpen]);


  return (
    <div
      className={`${classes.sidebar} ${!sidebarCtx.isOpen && classes.sidebar_close
        }`}
    >
      <div className={classes.sidebar__logo}>
        <img src={logo} />
      </div>
      <div className={classes.sidebar__menu}>
        {sidebarNav.map((nav, index) => (
          <>
            <NavLink
              ref={contentRef}
              to={nav.link}
              key={`nav-${index}`}
              className={(navClass) => (navClass.isActive ? `${classes.sidebar__menu__item} ${classes.active}` : `${classes.sidebar__menu__item}`)}
              onClick={openSidebarHandler}
            >
              <div className={classes.sidebar__menu__item__icon}>
                <Icon icon={nav.icon} />
              </div>
              <div className={classes.sidebar__menu__item__txt}>
                {t(nav.section)}
              </div>
            </NavLink>
            {nav.children && sidebarCtx.isOpen && <Icon className={lang === "fa" ? classes.iconfa : classes.iconen} onClick={clickHandler} icon="material-symbols:arrow-drop-down-rounded" width="36" height="36" rotate={showHandler ? 2 : 0} />
            }
            {nav.children && width <= 768 && <Icon onClick={clickHandler} className={lang === "fa" ? classes.icon__mobilefa : classes.icon__mobileen} icon="material-symbols:arrow-drop-down-rounded" width="36" height="36" />
            }
            {nav.children?.map((n, index) => {
              return (
                <NavLink
                  to={n.link}
                  key={`n-${index}`}
                  className={(navClass) => (navClass.isActive ? `${classes.sidebar__menu__item} ${classes.active} ` : `${classes.sidebar__menu__item}`)}
                  style={{ marginRight: "30px", marginLeft: "30px", maxHeight: `${accordionHeight}`, marginBottom: `${marginBottom}` }}

                  onClick={openSidebarHandler}
                >
                  <div className={classes.sidebar__menu__item__icon} >
                    <Icon icon={n.icon} />
                  </div>
                  <div className={classes.sidebar__menu__item__txt} >
                    {t(n.section)}
                  </div>
                </NavLink>
              )

            })}
          </>
        ))}
      </div>

      <div className={[classes.sidebar__menu, classes.logout].join("")}>
        <Link
          to="/"
          className={classes.sidebar__menu__item}
          onClick={logoutHandler}
        >
          <div className={classes.sidebar__menu__item__icon}>
            <Icon icon="tabler:logout" />
          </div>
          <div className={classes.sidebar__menu__item__txt}>{t("logout")}</div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;