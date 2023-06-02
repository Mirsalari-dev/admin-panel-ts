import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import EditProduct from "../components/edit/editProduct/EditProduct";
import useTitle from "../helper/useTitle";
import { IProductsTable } from "../interfaces/Itable";
import data from "../mock/tables";
import { useAppSelector } from "../redux/hooks";

function ProductEdit() {
  const { t } = useTranslation();

  const params = useParams();
  let { productId } = params;

  const products = useAppSelector((state) => state.products.products);

  let productInfo: IProductsTable = products.filter(
    (item) => item.ID.toString() === productId
  )[0];
  useTitle(`${t("editProduct")} ${productInfo.product} `);

  let productEdit = <EditProduct product={productInfo} />;

  return (
    <section>
      <h2 className="title">{t("editProduct")}</h2>
      {productEdit}
    </section>
  );
}

export default ProductEdit;
