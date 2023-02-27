import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CustomTable from "../components/tables/customTable/CustomTable";
import SearchContext from "../context/searchTerm";
import searchTerm from "../helper/searchTerm";
import useTitle from "../helper/useTitle";
import data from "../mock/tables";



function Comments() {
  const { t } = useTranslation();
  useTitle(t("comments"))
  const { search } = useContext(SearchContext)
  const [filtered, setFiltered] = useState<any>([]);

  useEffect(() => {
    setFiltered(searchTerm(data.comments, search))
  }, [search])

  let commentsTables = <CustomTable key={filtered} limit={10} headData={data.commentsHeader} bodyData={filtered} />

  return (
    <section>
      <h2 className="title">{t("comments")}</h2>
      {commentsTables}
    </section>
  );
}

export default Comments;


