
function MovieItem({movie, movieHandler}) {

  const movieClickEvent = (evt) => {
    evt.preventDefault();
    movieHandler(movie.imdbID);
  }

  return (
    <div className="card m-2" style={{ width: "18rem" }} onClick={movieClickEvent}>
      <img src={movie.Poster} className="card-img-top" alt={movie.Title}/>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{movie.Title}</li>
      </ul>
    </div>
  )
}

export default MovieItem;
