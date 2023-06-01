import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CustomTable from "../components/tables/customTable/CustomTable";
import useTitle from "../helper/useTitle";
import data from "../mock/tables";
import SearchContext from "../context/searchTerm";
import searchTerm from "../helper/searchTerm";
import { useAppSelector } from "../redux/hooks";

function Customers() {
  const { t } = useTranslation();
  useTitle(t("customers"));

  const { search } = useContext(SearchContext);
  const customers = useAppSelector((state) => state.customers.customers);
  const [filtered, setFiltered] = useState<any>([]);

  useEffect(() => {
    setFiltered(searchTerm(customers, search));
  }, [customers, search]);

  let customerTable = (
    <CustomTable
      limit={10}
      headData={data.customersHeader}
      bodyData={filtered}
      key={filtered}
    />
  );

  return (
    <section>
      <h2 className="title">{t("customers")}</h2>
      {customerTable}
    </section>
  );
}

export default Customers;
