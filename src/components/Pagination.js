import React from "react";

function Pagination(props) {
  let { numberOfItems, cPage, setcPage, totalpagesWaliMovies } = props;
  let pagesCount = 0;
  if (totalpagesWaliMovies)
    pagesCount = Math.ceil(totalpagesWaliMovies.length / numberOfItems);
  let pagesArr = [];
  for (let i = 1; i <= pagesCount; i++) {
    pagesArr.push(i);
  }

  return (
    <div>
      {pagesArr.map((pgCount, idx) => {
        let css =
          pgCount == cPage
            ? "border-2 py-2 px-3 rounded bg-blue-500 text-white"
            : "hover:bg-blue-500 hover:text-white border-2 py-2 px-3 rounded ";
        return (
          <button
            onClick={() => {
              setcPage(pgCount);
            }}
            key={idx + 1}
            className={css}
          >
            {pgCount}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
