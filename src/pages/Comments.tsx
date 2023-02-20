import React from "react";
import { useTranslation } from "react-i18next";
import CustomTable from "../components/tables/customTable/CustomTable";
import data from "../mock/tables";


function Comments() {
  const { t } = useTranslation();
  let commentsTables = <CustomTable limit={10} headData={data.commentsHeader} bodyData={data.comments} />

  return (
    <section>
      <h2 className="title">{t("comments")}</h2>
      {commentsTables}
    </section>
  );
}

export default Comments;
