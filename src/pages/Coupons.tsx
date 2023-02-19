import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
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
        <Link to="/discount/createCoupons" style={{ width: "300px", border: "none", backgroundColor: "transparent", margin:"0 -35px 25px -35px" }}><Button>{t("createCoupon")}</Button>
        </Link>
      </div>
      {couponsTable}
    </section>
  );
}

export default Coupons;
