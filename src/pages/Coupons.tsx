import React from "react";
import { useTranslation } from "react-i18next";
import CustomTable from "../components/tables/customTable/CustomTable";
import Button from "../components/UI/button/Button";
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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 className="title">{t("discount")}</h2>
        <button style={{ width: "300px", border: "none", backgroundColor: "transparent", marginBottom: "25px" }}><Button>{t("createCoupon")}</Button>
        </button>
      </div>
      {couponsTable}
    </section>
  );
}

export default Coupons;
