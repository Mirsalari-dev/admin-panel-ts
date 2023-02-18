import React from "react";
import Card from "../../UI/card/Card";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TCoupons as Props } from "../../../interfaces/Itable";
import classes from "./EditCoupons.module.scss";
import { Icon } from "@iconify/react";
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import Badge from "../../UI/badge/Badge";
import CheckBox from "../../UI/checkBox/CheckBox";

const EditCoupons: React.FC<{ coupons?: Props }> = (props) => {
  const { t } = useTranslation();
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

              <Input
                id="createdDate"
                type="text"
                value={t("crd1")}
              />
              <Input
                id="expireDate"
                type="time"
                value={props.coupons?.expireDate}
              />
              <div style={{marginBottom:"20px",display:"flex"}}>
                <h3 style={{display:"inline"}}>{t("status")}</h3>
                <CheckBox />
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
  );
};

export default EditCoupons;
