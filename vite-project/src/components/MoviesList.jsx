import { useState } from "react";

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

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [synopsis, setSynopsis] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie({ title, year, synopsis }); 
    setTitle(""); 
    setYear("");
    setSynopsis("");
  };

  return (
    <div className="AddMovieForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Movie Title:
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Year Released:
          <input
            name="year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <label>
          Synopsis:
          <input
            name="synopsis"
            type="text"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
          />
        </label>
        <button>Add Movie</button>
      </form>
    </div>
  );
}


function Movie({ title, year, synopsis }) {
  return (
    <li>
      <h3>{title}</h3> <span>({year})</span>
      <div>{synopsis}</div>
    </li>
  );
}


function MoviesList() {
  const [currentMovies, setCurrentMovies] = useState([...movies]);

  const movieItems = currentMovies.map((movie) => (
    <Movie
      key={movie.id}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
  ));

  const handleReverseMovies = () => {
    setCurrentMovies([...currentMovies].reverse());
  };

  const handleSortMoviesTitle = () => {
    setCurrentMovies(
      [...currentMovies].sort((a, b) => a.title.localeCompare(b.title))
    );
  };

  const handleAddMovie = (newMovie) => {
    newMovie.id = currentMovies.length + 1;
    setCurrentMovies([...currentMovies, newMovie]);
  };

  return (
    <div className="MoviesList componentBox">
      <AddMovieForm onAddMovie={handleAddMovie} />
      <ul>{movieItems}</ul>
      <SortButton label="Reverse List" onClick={handleReverseMovies} />
      <SortButton label="Sort by Title" onClick={handleSortMoviesTitle} />
    </div>
  );
}


function SortButton({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
  

export default MoviesList;