import React from "react";
import { useTranslation } from "react-i18next";
import CustomTable from "../components/tables/customTable/CustomTable";
import useTitle from "../helper/useTitle";
import data from "../mock/tables";



function Transactions() {
  const { t } = useTranslation();
  useTitle(t("transactions"))
  let transactionsTable = <CustomTable
    headData={data.latestOrders.header}
    bodyData={data.latestOrders.body}
    limit={10}
  />

  return (
    <section>
      <h2 className="title">{t("transactions")}</h2>
      {transactionsTable}
    </section>
  );
}

export default Transactions;
