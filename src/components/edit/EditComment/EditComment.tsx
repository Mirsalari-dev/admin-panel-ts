import React, { useState } from "react";
import Card from "../../UI/card/Card";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IcommentsTable as Props } from "../../../interfaces/Itable";
import classes from "./EditComment.module.scss";
import { Icon } from "@iconify/react";
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import CheckBox from "../../UI/checkBox/CheckBox";



const EditComment: React.FC<{ comment?: Props }> = (props) => {
  const { t } = useTranslation();
  const commentDate:any = props.comment?.date
  const translateCommentDate:any = t(commentDate)


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
                id="userName"
                type="text"
                value={props.comment?.userName}
              />

              <Input
                id="email"
                type="text"
                value={props.comment?.email}
              />
              <Input
                id="date"
                type="text"
                value={translateCommentDate}
                disabled
              />
              <div>
              <h3>{t("text")}</h3>
              <textarea>{props.comment?.text}</textarea>
              </div>

              <div style={{ marginBottom: "20px", display: "flex" }}>
                <h3 style={{ display: "inline" }}>{t("status")}</h3>
                <CheckBox contentActive="Confirmed" contentInActive="notConfirmed" />
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

export default EditComment;
