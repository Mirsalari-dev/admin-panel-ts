import { Icon } from "@iconify/react";

import classes from "./SearchBox.module.scss";

function SearchBox() {

  return (
    <div className={classes.searchBox}>
      <Icon
        icon="fluent:search-28-filled"
        width="14"
        style={{ fontWeight: "bold" }}
      />
      <input
        type="search"
        placeholder="search"
        name="search"
        className={classes.searchBox_input}
      />
    </div>
  );
}

export default SearchBox;
