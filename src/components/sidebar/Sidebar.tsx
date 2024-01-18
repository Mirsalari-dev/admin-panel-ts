import { Icon } from "@iconify/react";
import { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useWindowSize } from "usehooks-ts";
import sidebarNav from "../../config/sidebarNav";
import SidebarContext from "../../context/sidebarContext";
import classes from "./Sidebar.module.scss";

const Sidebar = () => {
  const [showHandler, setShowHandler] = useState(false);
  const [accordionHeight, setAccordionHeight] = useState("0px");
  const [marginBottom, setMarginBottom] = useState("0px");
  const location = useLocation();

  const { width } = useWindowSize();
  const sidebarCtx = useContext(SidebarContext);
  const { t } = useTranslation();
  const contentRef = useRef<any>(null);

  function openSidebarHandler() {
    //for width>768(tablet size) if sidebar was open in width<768 was opened too.
    //just in case of tablet size and smaller then, sidebar__open can added.
    if (width <= 768) document.body.classList.toggle("sidebar__open");
  }

  function logoutHandler() {
    openSidebarHandler();
  }

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
      <div className={classes.sidebar__logo}></div>
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
          style={{ marginBottom: "150px" }}
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
