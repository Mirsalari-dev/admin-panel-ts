import React from "react";
import { useTranslation } from "react-i18next";
import CustomTable from "../components/tables/customTable/CustomTable";
import data from "../mock/tables";


function Customers() {
  const { t } = useTranslation();
  let customerTable = <CustomTable limit={10} headData={data.customersHeader} bodyData={data.customers} />

  return (
    <section>
      <h2 className="title">{t("customers")}</h2>
      {customerTable}
    </section>
  );
}

export default Customers;
