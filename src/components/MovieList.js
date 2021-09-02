import MovieItem from "./MovieItem";

function MovieList({movies, movieHandler}) {
  return (
    <div className='container row mt-5'>
      {movies.map(movie => <MovieItem movieHandler={movieHandler} key={movie.imdbID} movie={movie}/> )}
    </div>
  )
}

export default MovieList;
