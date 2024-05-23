import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import DatePicker from "react-multi-date-picker";
import Card from "../components/UI/card/Card";
import Input from "../components/UI/input/Input";
import type { Value } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import CheckBox from "../components/UI/checkBox/CheckBox";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/UI/button/Button";
import classes from "../components/edit/EditCoupons/EditCoupons.module.scss";
import useTitle from "../helper/useTitle";
import SelectDropDown from "../components/UI/selectDropDown/SelectDropDown";
import { useAppDispatch } from "../redux/hooks";
import { addDiscount } from "../redux/discountSlice";

function CreateCoupons() {
  const { t } = useTranslation();
  useTitle(t("createCoupon"));
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
  const [active, setActive] = useState("");

  const [coupon, setCoupon] = useState({
    ID: Math.floor(Math.random() * 100),
    discount: "",
    percent: "",
    expireDate: dateExpire,
    createdDate: dateCreated,
    status: "active",
  });

  const onChangeHandler = (e: any) => {
    setCoupon({
      ...coupon,
      [e.target.id]: e.target.value,
    });
  };
  useEffect(() => {
    setCoupon({
      ...coupon,
      status: active,
      createdDate: new Intl.DateTimeFormat("fa-IR", options).format(
        dateCreated
      ),
      expireDate: new Intl.DateTimeFormat("fa-IR", options).format(dateExpire),
    });
  }, [active, dateExpire, dateCreated]);

  return (
    <section>
      <h2 className="title">{t("createCoupon")}</h2>
      <div className={classes.edit__container}>
        <div className={classes.edit__right}>
          <Card>
            <div className={classes.product__edit}>
              <h3 className={classes.subTitle}>
                <Icon icon="fluent:edit-16-regular" width="24" />
                {t("createCoupon")}
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <Input
                  id="discount"
                  type="text"
                  value={coupon.discount}
                  onChange={onChangeHandler}
                />

                <Input
                  id="percent"
                  type="text"
                  value={coupon.percent}
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
                    style={{
                      position: "absolute",
                      right: "260px",
                      top: "14px",
                    }}
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
                    style={{
                      position: "absolute",
                      right: "260px",
                      top: "14px",
                    }}
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
                  />
                </div>
                <SelectDropDown />
                <div className={classes.btn__wrapper}>
                  <Button
                    onClick={() => {
                      dispatch(addDiscount(coupon));
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
    </section>
  );
}

export default CreateCoupons;
