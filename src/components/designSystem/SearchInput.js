import React, {useState} from "react";
import { GoSearch, GoX } from "react-icons/go";

export default function SearchInput(props) {
const [searchText, setSearchText] = useState("");
  return (
    <div className="h-12 flex items-center w-full outline-none focus-within:border-inputBorder dark:focus-within:border-borderColorDark border border-borderColor dark:border-borderColorDark rounded-lg px-2 text-textColor dark:text-white text-md placeholder:text-placeholder dark:placeholder:text-borderColorDark bg-transparent">
      <GoSearch className="text-placeholder"></GoSearch>

      <input
        type="text"
        value={searchText}
        placeholder="Search transactions..."
        className="w-full h-full px-2 outline-none"
        onChange={(event) => setSearchText(event.target.value)}
      ></input>
      { searchText !== "" && (<button onClick={() => setSearchText("")}><GoX className="text-placeholder"></GoX></button>) }
    </div>
  );
}
