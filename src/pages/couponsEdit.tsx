import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import EditCoupons from "../components/edit/EditCoupons/EditCoupons";
import useTitle from "../helper/useTitle";
import { TCoupons } from "../interfaces/Itable";
import  data  from "../mock/tables"
import { useAppSelector } from "../redux/hooks";

function CouponsEdit() {
  const { t } = useTranslation();
  const params = useParams();
  let { couponsCode } = params;

  const coupons = useAppSelector((state) => state.discounts.discount);

  /* fallback in case of time limit to test firebase database will over */
  let couponsInfo: TCoupons = coupons.filter(
    (item) => item.discount === couponsCode
  )[0];
  useTitle(`${t("editCoupons")} ${couponsInfo.discount} `)
  let couponsEdit =<EditCoupons coupons={couponsInfo} />


  return (
    <section>
      <h2 className="title">{t("editCoupons")}</h2>
      {couponsEdit}
    </section>
  );
}

export default CouponsEdit;
