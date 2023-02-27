import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useContext } from "react"

import classes from "./SearchBox.module.scss";
import SearchContext from "../../../context/searchTerm";

function SearchBox() {
  const { t } = useTranslation();
  const { search, setSearch } = useContext(SearchContext)

  return (
    <div className={classes.searchBox}>
      <Icon
        icon="fluent:search-28-filled"
        width="14"
        style={{ fontWeight: "bold" }}
      />
      <input
        type="search"
        name="search"
        className={classes.searchBox_input}
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder={t("search")}
      />
    </div>
  );
}

export default SearchBox;
