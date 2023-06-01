import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CustomTable from "../components/tables/customTable/CustomTable";
import Button from "../components/UI/button/Button";
import useTitle from "../helper/useTitle";
import data from "../mock/tables";
import SearchContext from "../context/searchTerm";
import searchTerm from "../helper/searchTerm";
import { useAppSelector } from "../redux/hooks";


function Coupons() {
  const { t } = useTranslation();
  useTitle(t("discount"))

  const { search } = useContext(SearchContext)
  const [filtered, setFiltered] = useState<any>([]);

  const discount = useAppSelector((state) => state.discounts.discount);


  useEffect(() => {
    setFiltered(searchTerm(discount, search))
  }, [search,discount])

  let couponsTable = <CustomTable
    headData={data.coupons.head}
    bodyData={filtered}
    limit={10}
    key={filtered}
  />

  return (
    <section>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 className="title">{t("discount")}</h2>
        <Link to="/discount/createCoupons" style={{ width: "300px", border: "none", backgroundColor: "transparent", margin: "0 -35px 25px -35px" }}><Button>{t("createCoupon")}</Button>
        </Link>
      </div>
      {couponsTable}
    </section>
  );
}

export default Coupons;
