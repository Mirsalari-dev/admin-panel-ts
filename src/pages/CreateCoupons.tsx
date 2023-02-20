import { Icon } from "@iconify/react";
import React,{useState} from "react";
import { useTranslation } from "react-i18next";
import DatePicker from "react-multi-date-picker";
import Card from "../components/UI/card/Card";
import Input from "../components/UI/input/Input";
import type { Value } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import CheckBox from "../components/UI/checkBox/CheckBox";
import { Link } from "react-router-dom";
import Button from "../components/UI/button/Button";
import classes from "../components/edit/EditCoupons/EditCoupons.module.scss";


function CreateCoupons() {
  const { t } = useTranslation();

  const [dateCreated, setDateCreated] = useState<Value>(new Date())
  const [dateExpire, setDateExpire] = useState<Value>(new Date())

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
              />

              <Input
                id="percentDiscount"
                type="number"
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
                <CheckBox contentInActive="inactive" contentActive="active" />
              </div>

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
    </section>
  );
}

export default CreateCoupons;
