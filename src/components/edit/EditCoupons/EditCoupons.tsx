import React, { useState, useEffect } from "react";
import Card from "../../UI/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TCoupons as Props } from "../../../interfaces/Itable";
import classes from "./EditCoupons.module.scss";
import { Icon } from "@iconify/react";
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import CheckBox from "../../UI/checkBox/CheckBox";

import DatePicker, { DateObject } from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import SelectDropDown from "../../UI/selectDropDown/SelectDropDown";
import { useAppDispatch } from "../../../redux/hooks";
import { updateDiscount } from "../../../redux/discountSlice";

const EditCoupons: React.FC<{ coupons?: Props }> = (props) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const router = useNavigate();
  const options: any = {
    calendar: "persian",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const [dateCreated, setDateCreated] = useState<any>();
  const [dateExpire, setDateExpire] = useState<any>();
  const [active, setActive] = useState(props.coupons?.status);
  const [couponInfoUpldate, setCouponInfoUpldate] = useState({
    id: props.coupons?.ID,
    discount: props.coupons?.discount,
    percent: props.coupons?.percent,
    status: props.coupons?.status,
    createdDate: props.coupons?.createdDate,
    expireDate: props.coupons?.expireDate,
  });

  const onChangeHandler = (e: any) => {
    setCouponInfoUpldate({
      ...couponInfoUpldate,
      [e.target.id]: e.target.value,
    });
  };
  useEffect(() => {
    setCouponInfoUpldate({
      ...couponInfoUpldate,
      status: active,
      createdDate: new Intl.DateTimeFormat('fa-IR', options).format(dateCreated),
      expireDate: new Intl.DateTimeFormat('fa-IR', options).format(dateExpire),
    });
  }, [active, dateExpire, dateCreated]);

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
                value={couponInfoUpldate.discount}
                onChange={onChangeHandler}
              />

              <Input
                id="percent"
                type="text"
                value={couponInfoUpldate.percent}
                onChange={onChangeHandler}
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
                <Icon
                  style={{ position: "absolute", right: "260px", top: "14px" }}
                  icon="uil:calender"
                  width="24"
                  height="24"
                />
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
                <Icon
                  style={{ position: "absolute", right: "260px", top: "14px" }}
                  icon="uil:calender"
                  width="24"
                  height="24"
                />
              </div>
              <div style={{ marginBottom: "20px", display: "flex" }}>
                <h3 style={{ display: "inline" }}>{t("status")}</h3>
                <CheckBox
                  contentActive="Confirmed"
                  contentInActive="notConfirmed"
                  onClick={() => {
                    setActive(
                      active == "Confirmed" ? "notConfirmed" : "Confirmed"
                    );
                  }}
                  active={active}
                />{" "}
              </div>
              <SelectDropDown />

              <div className={classes.btn__wrapper}>
                <Button
                  onClick={() => {
                    dispatch(updateDiscount(couponInfoUpldate));
                    router("/discount");
                  }}
                  type="submit"
                >
                  {t("upload")}
                </Button>
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
