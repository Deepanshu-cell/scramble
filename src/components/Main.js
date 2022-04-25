import React from "react";
import Movies from "./Movies.js";
import Generes from "./Genres";

function Main() {
  const [genres, setGenres] = React.useState("");
  let [cPage, setcPage] = React.useState(1);
  const getGenres = (genre) => {
    if (genre == "All Genres") {
      setGenres("");
    } else {
      setGenres(genre);
    }

    setcPage(1);
  };
  return (
    <div className="flex">
      <Generes getGenres={getGenres} />
      <Movies genres={genres} cPage={cPage} setcPage={setcPage} />
    </div>
  );
}

export default Main;
