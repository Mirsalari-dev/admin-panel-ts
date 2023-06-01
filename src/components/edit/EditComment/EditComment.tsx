import React, { useEffect, useState } from "react";
import Card from "../../UI/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IcommentsTable as Props } from "../../../interfaces/Itable";
import classes from "./EditComment.module.scss";
import { Icon } from "@iconify/react";
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import CheckBox from "../../UI/checkBox/CheckBox";
import { useAppDispatch } from "../../../redux/hooks";
import { updateComments } from "../../../redux/commentsSlice";

const EditComment: React.FC<{ comment?: Props }> = (props) => {
  const { t } = useTranslation();
  const commentDate: any = props.comment?.date;
  const translateCommentDate: any = t(commentDate);
  const dispatch = useAppDispatch();
  const router = useNavigate();
  const [active, setActive] = useState(props.comment?.status);

  const [commentInfoUpldate, setCommentInfoUpldate] = useState({
    id: props.comment?.ID,
    userName: props.comment?.userName,
    text: props.comment?.text,
    email: props.comment?.email,
    status: props.comment?.status,
    avatar: props.comment?.avatar,
    date: props.comment?.date,
  });

  const onChangeHandler = (e: any) => {
    setCommentInfoUpldate({
      ...commentInfoUpldate,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    setCommentInfoUpldate({ ...commentInfoUpldate, status: active });
  }, [active]);

  console.log(commentInfoUpldate);

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
                value={commentInfoUpldate.userName}
                onChange={onChangeHandler}
              />

              <Input
                id="email"
                type="text"
                value={commentInfoUpldate.email}
                onChange={onChangeHandler}
              />
              <Input
                id="date"
                type="text"
                value={translateCommentDate}
                disabled
              />
              <div>
                <h3>{t("text")}</h3>
                <textarea
                  id="text"
                  value={commentInfoUpldate.text}
                  onChange={onChangeHandler}
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

              <div className={classes.btn__wrapper}>
                <Button
                  onClick={() => {
                    dispatch(updateComments(commentInfoUpldate));
                    router("/comments");
                  }}
                  type="submit"
                >
                  {t("upload")}
                </Button>
                <Link to="/comments">
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
