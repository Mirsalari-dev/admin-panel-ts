import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import classes from "./Sidebar.module.scss";
import { Icon } from "@iconify/react";
import { useLocalStorage, useWindowSize } from "usehooks-ts";
import sidebarNav from "../../config/sidebarNav";
import SidebarContext from "../../context/sidebarContext";
import logoE from "../../assets/images/logoE.png";
import fav from "../../assets/images/fav.png";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import LangContext from "../../context/langContext";

const Sidebar = () => {
  const [showHandler, setShowHandler] = useState(false);
  const [accordionHeight, setAccordionHeight] = useState("0px");
  const [marginBottom, setMarginBottom] = useState("0px");
  const location = useLocation();

  const { width } = useWindowSize();
  const sidebarCtx = useContext(SidebarContext);
  const { lang } = useContext(LangContext);
  const { t } = useTranslation();
  const contentRef = useRef<any>(null);
  const router = useNavigate()

  function openSidebarHandler() {
    //for width>768(tablet size) if sidebar was open in width<768 was opened too.
    //just in case of tablet size and smaller then, sidebar__open can added.
    if (width <= 768) document.body.classList.toggle("sidebar__open");
  }

  function logoutHandler() {
    openSidebarHandler();
  }

  const clickHandler = () => {
    setShowHandler((showHandler) => !showHandler);
    setAccordionHeight(
      showHandler ? "0px" : `${contentRef.current.scrollHeight}px`
    );
    setMarginBottom(
      showHandler ? "0px" : `${contentRef.current.scrollHeight}px`
    );
  };

  useEffect(() => {
    if (!sidebarCtx.isOpen) {
      setShowHandler(false);
      setAccordionHeight("0px");
      setMarginBottom("0px");
    }
  }, [sidebarCtx.isOpen]);

  useEffect(() => {
    if (
      location.pathname.includes("/discount") ||
      location.pathname.includes("/products") ||
      location.pathname.includes("/addproduct")
    ) {
      setShowHandler(true);
      setAccordionHeight(
        showHandler ? "0px" : `${contentRef.current.scrollHeight}px`
      );
      setMarginBottom(
        showHandler ? "0px" : `${contentRef.current.scrollHeight}px`
      );
    } else {
      setShowHandler(false);
    }
  }, []);

  return (
    <div
      className={`${classes.sidebar} ${
        !sidebarCtx.isOpen && classes.sidebar_close
      }`}
    >
      <div onClick={()=>router("/")} className={classes.sidebar__logo}>
        {!sidebarCtx.isOpen && width > 768 ? (
          <img
            style={{ width: "33px", height: "22px", marginLeft: "12px" }}
            src={fav}
          />
        ) : (
          lang=="fa" ? <img src={logoE} style={{paddingLeft:"14px"}} /> :  lang=="en" && width <= 768 ? <img style={{marginLeft:"-200px"}} src={logoE}/> : <img src={logoE} />

          // <img src={logoE} />
        )}
      </div>
      <div className={classes.sidebar__menu}>
        {sidebarNav.map((nav, index) => (
          <>
            <NavLink
              ref={contentRef}
              to={nav.link}
              key={`nav-${index}`}
              className={(navClass) =>
                navClass.isActive
                  ? `${classes.sidebar__menu__item} ${classes.active}`
                  : `${classes.sidebar__menu__item}`
              }
              onClick={openSidebarHandler}
            >
              <div className={classes.sidebar__menu__item__icon}>
                <Icon icon={nav.icon} />
              </div>
              <div className={classes.sidebar__menu__item__txt}>
                {t(nav.section)}
              </div>
            </NavLink>
          </>
        ))}
      </div>

      <div className={[classes.sidebar__menu, classes.logout].join("")}>
        <Link
          to="/"
          className={classes.sidebar__menu__item}
          onClick={logoutHandler}
          style={{marginBottom:"150px"}}
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
