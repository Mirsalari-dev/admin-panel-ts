import classes from "./MainLayout.module.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";


const MainLayout = () => {

    return (
        <div className={classes.container}>
        <Sidebar />
        <div className={classes.main}>
          <div>
            <TopNav />
            <Outlet />
          </div>
        </div>
      </div>
    );
};

export default MainLayout;
