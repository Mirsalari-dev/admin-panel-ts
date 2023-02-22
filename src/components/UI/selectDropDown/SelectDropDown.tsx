import React from 'react';
import Multiselect from "multiselect-react-dropdown";
import classes from "./SelectDropDown.module.scss";
import data from '../../../mock/tables';
import { useTranslation } from 'react-i18next';


const SelectDropDown = () => {

    const {t} = useTranslation()

    return (
        <div className={classes.container}>
        <Multiselect
          isObject={false}
          options={data.products.map(p=>p.product)}
          placeholder={t("selectProduct")}
          emptyRecordMsg={t("emptyRecordMsg")}
        />
      </div>
    );
};

export default SelectDropDown;