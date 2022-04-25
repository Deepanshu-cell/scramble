import React from "react";
import InputBox from "./InputBox";
import MoviesTable from "./MoviesTable";

import { useEffect } from "react";
import Pagination from "./Pagination";

function Movies(props) {
  let [searchText, setSearchText] = React.useState("");
  let [numberOfItems, setNumberOfItems] = React.useState(4);

  // ******Got from movies table
  const [content, setContent] = React.useState([]);
  const [isLoaded, setLoaded] = React.useState(true);

  let { cPage, setcPage } = props;

  // so i will run only one time after first execution of return statement
  // fetch is inbuilt feature of browser that makes the request to get data -> promise based
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(
        "https://react-backend101.herokuapp.com/movies"
      );
      response = await response.json();
      // console.log(response);
      setLoaded(false);
      setContent(response);
    };
    fetchData();
  },[]);

  const setGlobalSearchText = (searchedText) => {
    setSearchText(searchedText);
    setcPage(1);
  };

  const setGlobalNumberOfItems = (numberItems) => {
    setNumberOfItems(numberItems);
    setcPage(1);
  };

  // ********Movies table Data *******************

  let filteredContent = [];
  let totalpagesWaliMovies;
  if (content.movies) {
    // **************searching logic
    if (props.searchText) {
      // filter the array according to searched Text
      filteredContent = content.movies.filter((movie) => {
        let movieTilteLowerCase = movie.title.toLowerCase();
        let searchTextLowerCase = props.searchText.toLowerCase();
        return movieTilteLowerCase.includes(searchTextLowerCase);
      });
    } else {
      // same as content
      filteredContent = content.movies;
    }
  }

  // *************Genres filtering logic
  if (props.genres != "") {
    filteredContent = filteredContent.filter((movie) => {
      return movie.genre.name === props.genres;
    });
  }

  totalpagesWaliMovies = filteredContent;

  //********** number of lines logic
  // starting indx = (currentPageNumber -1) * number Of Movies per Page
  // ending indx = starting indx + number Of Movies per Page
  let sidx = (cPage - 1) * numberOfItems;
  let eidx = sidx + numberOfItems;
  filteredContent = filteredContent.slice(sidx, eidx);

  // ********Movies table Data ******

  return (
    <div>
      <InputBox
        setGlobalSearchText={setGlobalSearchText}
        setGlobalNumberOfItems={setGlobalNumberOfItems}
      />
      <MoviesTable
        searchText={searchText}
        numberOfItems={numberOfItems}
        cPage={cPage}
        genres={props.genres}
        content={content}
        setContent={setContent}
        isLoaded={isLoaded}
        filteredContent={filteredContent}
      />

      <Pagination
        totalpagesWaliMovies={totalpagesWaliMovies}
        cPage={cPage}
        numberOfItems={numberOfItems}
        setcPage={setcPage}
      />
    </div>
  );
}

export default Movies;
