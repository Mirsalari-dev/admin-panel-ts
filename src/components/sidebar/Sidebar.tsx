import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from "./Sidebar.module.scss";
import { Icon } from "@iconify/react";
import { useWindowSize } from 'usehooks-ts';
import sidebarNav from '../../config/sidebarNav';




const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const location = useLocation();
    const { width } = useWindowSize();



    function openSidebarHandler() {
        //for width>768(tablet size) if sidebar was open in width<768 was opened too.
        //just in case of tablet size and smaller then, sidebar__open can added.
        if (width <= 768) document.body.classList.toggle("sidebar__open");
    }

    function logoutHandler() {
        openSidebarHandler();
    }


    useEffect(() => {
        const curPath = window.location.pathname.split("/")[1];
        const activeItem = sidebarNav.findIndex((item) => item.section === curPath);

        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return (
        <div>
            {/* <div className={classes.sidebar__logo}>
          <img src={images.logo} />
        </div> */}
            <div className={classes.sidebar__menu}>
                {sidebarNav.map((nav, index) => (
                    <Link
                        to={nav.link}
                        key={`nav-${index}`}
                        className={`${classes.sidebar__menu__item} ${activeIndex === index && classes.active
                            }`}
                        onClick={openSidebarHandler}
                    >
                        <div className={classes.sidebar__menu__item__icon}>
                            <Icon icon={nav.icon} />
                        </div>
                        <div className={classes.sidebar__menu__item__txt}>
                            {nav.section}
                        </div>
                    </Link>
                ))}
            </div>

            <div className={[classes.sidebar__menu, classes.logout].join("")}>
                <Link
                    to="/login"
                    className={classes.sidebar__menu__item}
                    onClick={logoutHandler}
                >
                    <div className={classes.sidebar__menu__item__icon}>
                        <Icon icon="tabler:logout" />
                    </div>
                    <div className={classes.sidebar__menu__item__txt}>logout</div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;