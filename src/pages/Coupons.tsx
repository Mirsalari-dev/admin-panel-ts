import React from "react";
import { useTranslation } from "react-i18next";
import CustomTable from "../components/tables/customTable/CustomTable";
import data from "../mock/tables";



function Coupons() {
  const { t } = useTranslation();
  let couponsTable = <CustomTable
    headData={data.coupons.head}
    bodyData={data.coupons.body}
    limit={10}
  />

  return (
    <section>
      <h2 className="title">{t("discount")}</h2>
      {couponsTable}
    </section>
  );
}

export default Coupons;
