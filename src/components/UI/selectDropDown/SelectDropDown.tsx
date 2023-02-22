import React from 'react';
import Multiselect from "multiselect-react-dropdown";
import classes from "./SelectDropDown.module.scss";
import data from '../../../mock/tables';
import { useTranslation } from 'react-i18next';


const SelectDropDown = () => {

  const { t } = useTranslation()

  return (

    <div style={{ marginBottom: "20px" }}>

      <h3>{t("selectProduct")}</h3>
      <div className={classes.container}>
        <Multiselect
          isObject={false}
          options={data.products.map(p => p.product)}
          placeholder={t("selectProduct")}
          emptyRecordMsg={t("emptyRecordMsg")}
        />
      </div>

      <h3>{t("selectCategory")}</h3>
      <div className={classes.container}>
        <Multiselect
          isObject={false}
          options={[...new Set(data.products.map(p => p.category))]}
          placeholder={t("selectCategory")}
          emptyRecordMsg={t("emptyRecordMsg")}
        />
      </div>


      </div>

  );
};

export default SelectDropDown;