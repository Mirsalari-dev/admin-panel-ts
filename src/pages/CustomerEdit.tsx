import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";


function CustomerEdit() {
  const { t } = useTranslation();
  const params = useParams();
  let { customerId } = params;


  return (
    <section>
      <h2 className="title">{t("editCustomer")}</h2>
    </section>
  );
}

export default CustomerEdit;
