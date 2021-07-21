import React, { useState } from "react";
import Search from "./Search";

function Header({ setSearch, search }) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearch={setSearch} search={search} />
    </header>
  );
}

export default Header;
