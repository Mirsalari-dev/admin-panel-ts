import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CustomTable from "../components/tables/customTable/CustomTable";
import useTitle from "../helper/useTitle";
import data from "../mock/tables";
import SearchContext from "../context/searchTerm";
import searchTerm from "../helper/searchTerm";


function Products() {
  const { t } = useTranslation();
  useTitle(t("products"))

  const { search } = useContext(SearchContext)
  const [filtered, setFiltered] = useState<any>([]);

  useEffect(() => {
    setFiltered(searchTerm(data.products, search))
  }, [search])



  let productsTable = <CustomTable
    headData={data.productsHeader}
    bodyData={filtered}
    limit={10}
    key={filtered}
  />

  return (
    <section>
      <h2 className="title">{t("products")}</h2>
      {productsTable}
    </section>
  );
}

export default Products;
