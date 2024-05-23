import React from "react";
import { useTranslation } from "react-i18next";
import Chart from "../components/chart/Chart";
import Summary from "../components/summary/Summary";
import Table from "../components/tables/DashboardTables";
import useTitle from "../helper/useTitle";


function Dashboard() {
  const { t } = useTranslation();
  useTitle(t("dashboard"))

  return (
    <section>
      <h2 className="title">{t("dashboard")}</h2>
      <p>asdadasdadasd</p>
      <Summary />
      <Chart />
      <Table />
    </section>
  );
}

export default Dashboard;
