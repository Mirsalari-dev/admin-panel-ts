import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CustomTable from "../components/tables/customTable/CustomTable";
import useTitle from "../helper/useTitle";
import data from "../mock/tables";
import SearchContext from "../context/searchTerm";
import searchTerm from "../helper/searchTerm";
import { useAppSelector } from "../redux/hooks";

function Products() {
  const { t } = useTranslation();
  useTitle(t("products"));

  const { search } = useContext(SearchContext);
  const [filtered, setFiltered] = useState<any>([]);

  const products = useAppSelector((state) => state.products.products);

  useEffect(() => {
    setFiltered(searchTerm(products, search));
  }, [search, products]);

  let productsTable = (
    <CustomTable
      headData={data.productsHeader}
      bodyData={filtered}
      limit={10}
      key={filtered}
    />
  );

  return (
    <section>
      <h2 className="title">{t("products")}</h2>
      {productsTable}
    </section>
  );
}

export default Products;
