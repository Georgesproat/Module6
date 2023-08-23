import { useState } from "react";

function Movie({ title, year, synopsis }) {
  return (
    <li>
      <h3>{title}</h3> <span>({year})</span>
      <div>{synopsis}</div>
    </li>
  );
}

function MoviesList() {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption."
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker."
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space."
    },
    {
      id: 4,
      title: "Whiplash",
      year: 2015,
      synopsis: "A Jazz drummer has a tough teacher"
    }
  ];

  const [currentMovies, setCurrentMovies] = useState(movies);

  const movieItems = currentMovies.map((movie) => (
    <Movie
      key={movie.id}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
  ));

  const handleReverseMovies = () => {
    // first clone the original, so we don’t mutate it
    let newMovies = [...currentMovies];
    newMovies.reverse(); // 2. modify the clone
    setCurrentMovies(newMovies); // 3. set updated clone in state
  };

  const handleSortMoviesTitle = () => {
    // first clone the original, so we don’t mutate it
    let newMovies = [...currentMovies];
    newMovies.sort((movie1, movie2) => {
      if (movie1.title === movie2.title) return 0;
      else if (movie1.title > movie2.title) return 1;
      else return -1;
    }); // 2. modify the clone
    setCurrentMovies(newMovies); // 3. set updated clone in state
  };


  return (
    <div className="MoviesList componentBox">
      <ul>{movieItems}</ul>
      <button onClick={handleReverseMovies}>Reverse List</button>
      <button onClick={handleSortMoviesTitle}>Sort by title</button>
    </div>
  );
}

export default MoviesList;

// ++ Try extracting a SortButton component to replace the above

