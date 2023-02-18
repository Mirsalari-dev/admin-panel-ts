import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import EditCoupons from "../components/edit/EditCoupons/EditCoupons";
import { TCoupons } from "../interfaces/Itable";
import  data  from "../mock/tables"

function CouponsEdit() {
  const { t } = useTranslation();
  const params = useParams();
  let { couponsCode } = params;

  /* fallback in case of time limit to test firebase database will over */
  let couponsInfo: TCoupons = data.coupons.body.filter(
    (item) => item.discount === couponsCode
  )[0];

  let couponsEdit =<EditCoupons coupons={couponsInfo} />


  return (
    <section>
      <h2 className="title">{t("editCoupons")}</h2>
      {couponsEdit}
    </section>
  );
}

export default CouponsEdit;
