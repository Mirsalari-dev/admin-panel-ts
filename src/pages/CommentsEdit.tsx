import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import EditComment from "../components/edit/EditComment/EditComment";
import { IcommentsTable } from "../interfaces/Itable";
import  data  from "../mock/tables"

function CommentsEdit() {
  const { t } = useTranslation();
  const params = useParams();
  let { commentsId } = params;

  /* fallback in case of time limit to test firebase database will over */
  let commentsInfo: IcommentsTable = data.comments.filter(
    (item) => item.ID === commentsId
  )[0];

  let couponsEdit =<EditComment comment={commentsInfo} />


  return (
    <section>
      <h2 className="title">{t("CommentEdit")}</h2>
      {couponsEdit}
    </section>
  );
}

export default CommentsEdit;
