import React from "react";
import { useEffect } from "react";
function Genres(props) {
  const [isLoading, setLoading] = React.useState(true);
  const [content, setContent] = React.useState([]);

  const sendGenres = (e) => {
    props.getGenres(e.target.innerText);
  };

  useEffect(() => {
    // fetch is inbuilt feature of browser that makes the request to get data -> promise based
    (async () => {
      let response = await fetch(
        "https://react-backend101.herokuapp.com/genres"
      );
      response = await response.json();
      setLoading(false);
      setContent(response);
    })();
  }, []);

  return (
    <div className="Genre">
      <div
        className="mr-6 border-2 h-10 w-40 font-bold text-center cursor-pointer"
        onClick={sendGenres}
      >
        All Genres
      </div>
      {isLoading == true ? (
        <div className="font-bold">Loading...</div>
      ) : (
        content.genres.map((movie) => {
          return (
            <div
              key={movie._id}
              className="mr-6 border-2 h-10 cursor-pointer w-40 font-bold text-center hover hover:bg-sky-700"
              onClick={sendGenres}
            >
              {movie.name}
            </div>
          );
        })
      )}
    </div>
  );
}

export default Genres;
