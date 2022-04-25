import React from "react";

function MoviesTable(props) {
  let { content, setContent, isLoaded, filteredContent } = props;

  let handleDelete = (movieId) => {
    let restMovies = content?.movies?.filter((movie) => {
      return movie._id !== movieId;
    });

    let newObject = { movies: restMovies };
    setContent(newObject);
  };

  // data (HTML of Movie Table)
  return (
    <div>
      <div>
        {isLoaded == true ? (
          <div>Loading....</div>
        ) : (
          <table className="text-center table-auto">
            <thead>
              <tr>
                <th className="px-2">#</th>
                <th className="px-2">Title</th>
                <th className="px-2">Genre</th>
                <th className="px-2">Stock</th>
                <th className="px-2">Rate</th>
                <th className="px-2"></th>
              </tr>
            </thead>
            <tbody>
              {filteredContent.map((movie, idx) => {
                return (
                  <tr key={movie._id}>
                    <td className="px-2 text-center">{idx + 1}</td>
                    <td className="px-2 text-center">{movie.title}</td>
                    <td className="px-4 text-center">{movie.genre.name}</td>
                    <td className="px-2 text-center">{movie.numberInStock}</td>
                    <td className="px-2 text-center">
                      {movie.dailyRentalRate}
                    </td>
                    <td className="px-2 text-center">
                      <button
                        onClick={() => {
                          handleDelete(movie._id);
                        }}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default MoviesTable;
