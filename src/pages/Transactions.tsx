import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CustomTable from "../components/tables/customTable/CustomTable";
import useTitle from "../helper/useTitle";
import data from "../mock/tables";
import SearchContext from "../context/searchTerm";
import searchTerm from "../helper/searchTerm";


function Transactions() {
  const { t } = useTranslation();
  useTitle(t("transactions"))
  const { search } = useContext(SearchContext)
  const [filtered, setFiltered] = useState<any>([]);

  useEffect(() => {
    setFiltered(searchTerm(data.latestOrders.body, search))
  }, [search])


  let transactionsTable = <CustomTable headData={data.latestOrders.header} bodyData={filtered} limit={10} key={filtered} />

  return (
    <section>
      <h2 className="title">{t("transactions")}</h2>
      {transactionsTable}
    </section>
  );
}

export default Transactions;
