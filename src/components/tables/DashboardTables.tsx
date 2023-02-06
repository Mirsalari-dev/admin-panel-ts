import { Link } from "react-router-dom";
import classes from "./DashboardTables.module.scss";
import { useTranslation } from "react-i18next";


const Table = () => {
  const { t } = useTranslation();
  return (
    <section className={classes.table}>
      <div
        className={`${classes.table__top__customers} ${classes.table__child}`}
      >
        <div className={classes.table__title}>
          <p className="subTitle">{t("topCustomers")}</p>
          <Link to="/">{t("viewAll")}</Link>
        </div>
      </div>
      <div
        className={`${classes.table__latest__orders} ${classes.table__child}`}
      >
        <div className={classes.table__title}>
          <p className="subTitle">{t("latestTransaction")}</p>
          <Link to="/">{t("viewAll")}</Link>
        </div>
      </div>
    </section>
  );
};

export default Table;
