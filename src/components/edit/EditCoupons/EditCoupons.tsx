import React, { useState } from "react";
import Card from "../../UI/card/Card";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TCoupons as Props } from "../../../interfaces/Itable";
import classes from "./EditCoupons.module.scss";
import { Icon } from "@iconify/react";
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import CheckBox from "../../UI/checkBox/CheckBox";

import DatePicker, { DateObject } from "react-multi-date-picker"
import type { Value } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import SelectDropDown from "../../UI/selectDropDown/SelectDropDown";


const EditCoupons: React.FC<{ coupons?: Props }> = (props) => {
  const { t } = useTranslation();
  const [dateCreated, setDateCreated] = useState<Value>(new Date())
  const [dateExpire, setDateExpire] = useState<Value>(new Date())

  return (
    <div className={classes.edit__container}>
      <div className={classes.edit__right}>
        <Card>
          <div className={classes.product__edit}>
            <h3 className={classes.subTitle}>
              <Icon icon="fluent:edit-16-regular" width="24" />
              {t("edit")}
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Input
                id="discount"
                type="text"
                value={props.coupons?.discount}
              />

              <Input
                id="percentDiscount"
                type="number"
                value={props.coupons?.percent}
              />

              <div className={classes.form__control}>
                <label>{t("createdDate")}</label>
                <DatePicker
                  inputClass={classes.input}
                  calendar={persian}
                  locale={persian_fa}
                  value={dateCreated}
                  onChange={setDateCreated}
                  format="YYYY-MM-DD HH:mm:ss"
                />
                <Icon style={{ position: "absolute", right: "260px", top: "14px" }} icon="uil:calender" width="24" height="24" />

              </div>
              <div className={classes.form__control}>
                <label>{t("expireDate")}</label>
                <DatePicker
                  inputClass={classes.input}
                  calendar={persian}
                  locale={persian_fa}
                  value={dateExpire}
                  onChange={setDateExpire}
                  format="YYYY-MM-DD HH:mm:ss"
                />
                <Icon style={{ position: "absolute", right: "260px", top: "14px" }} icon="uil:calender" width="24" height="24" />

              </div>
              <div style={{ marginBottom: "20px", display: "flex" }}>
                <h3 style={{ display: "inline" }}>{t("status")}</h3>
                <CheckBox contentActive="active" contentInActive="inactive" />
              </div>
              <SelectDropDown />

              <div className={classes.btn__wrapper}>
                <Link to="/discount">
                  <Button type="submit">{t("upload")}</Button>
                </Link>
                <Link to="/discount">
                  <Button outline={true}>{t("cancel")}</Button>
                </Link>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EditCoupons;
