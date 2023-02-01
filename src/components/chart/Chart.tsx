import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LineChart from "./LineChart";
import classes from "./Chart.module.scss";
import Card from "../UI/card/Card";
import data from "../../mock/chartData";

const SaleChart = () => {
  const { t } = useTranslation();

  const [userData, setUserData] = useState({
    labels: data.revenueByMonths.labels.map((month) => t(month)),
    datasets: [
      {
        label: t("summaryOfSale"),
        data: data.revenueByMonths.data,
        borderColor: "#ee384e",
        backgroundColor: "#3c4b6d",
      },
    ],
  });
  
  return (
    <section className={classes.chart}>
      <p className="subTitle">{t("quickAnalysis")}</p>
      <Card>
        <div className={classes.chart__wrapper}>
          <LineChart chartData={userData} />
        </div>
      </Card>
    </section>
  );
};

export default SaleChart;