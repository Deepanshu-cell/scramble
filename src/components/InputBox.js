import React from "react";
import {Link} from 'react-router-dom'

function InputBox(props) {
  let [searchText, setSearchText] = React.useState("");
  let [numberOfItems, setNumberOfItems] = React.useState(4);

  function handleText(e) {
    setSearchText(e.target.value);
    props.setGlobalSearchText(e.target.value);
  }

  function handleCount(e) {
    setNumberOfItems(e.target.value);
    props.setGlobalNumberOfItems(e.target.value);
  }

  return (
    <div>
      <Link to="/new">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded">
          New
        </button>
      </Link>
      <input
        className="bg-gray-200 appearance-none border-2 rounded py-1 px-2 mx-2 font-bold"
        type="text"
        value={searchText}
        onChange={handleText}
      />
      <input
        className="bg-gray-200 appearance-none border-2 rounded py-1 px-2 mx-2 font-bold"
        type="number"
        value={numberOfItems}
        onChange={handleCount}
      />
    </div>
  );
}

export default InputBox;
