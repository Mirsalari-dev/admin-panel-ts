import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import EditCustomer from "../components/edit/editCustomer/EditCustomer";
import useTitle from "../helper/useTitle";
import { IcustomersTable } from "../interfaces/Itable";
import  data  from "../mock/tables"

function CustomerEdit() {
  const { t } = useTranslation();
  const params = useParams();
  let { customerId } = params;

  /* fallback in case of time limit to test firebase database will over */
  let customerInfo: IcustomersTable = data.customers.filter(
    (item) => item.ID.toString() === customerId
  )[0];
  useTitle(`${t("editCustomer")} ${customerInfo.userName} `)

  let customerEdit =<EditCustomer customer={customerInfo} />


  return (
    <section>
      <h2 className="title">{t("editCustomer")}</h2>
      {customerEdit}
    </section>
  );
}

export default CustomerEdit;
