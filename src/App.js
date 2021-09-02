import './App.css';
import {useEffect, useState} from "react";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import {MovieDetail} from "./components/MovieDetail";

function App() {

  const apiKey = 'YOUR_API_KEY';
  const movieUrl = 'https://www.omdbapi.com/';

  const [movies, setMovies] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState('');
  const [movieDetail, setMovieDetail] = useState([]);
  const [modalStyle, setModalStyle] = useState('none');
  const [modalClass, setModalClass] = useState('');

  async function getMovies(searchText) {
    const response = await fetch(movieUrl + '?apikey=' + apiKey + '&s=' + searchText).then(res => res.json());
    const { Error, Search:movies, totalResults: totalCount} = response;
    return { movies, totalCount, Error: Error ?? '' };
  }
  
  async function getAllMovies(search = '') {
    const data = await getMovies(search);
    setError(data.Error);
    if (!data.Error.length){
      setMovies(data.movies);
      setTotalCount(data.totalCount);
    }else {
      setMovies([]);
      setTotalCount(0);
    }
  }

  async function getMovieById(id) {
    return await fetch(movieUrl + '?apikey=' + apiKey + '&i=' + id).then(res => res.json());
  }

  async function getMovie(id) {
    const data = await getMovieById(id);
    console.log(data)
    setMovieDetail([...data]);
    setModalStyle('block');
    setModalClass('show');

  }

  async function openModal(id) {
    await getMovie(id);
  }

  function closeModal() {
    setModalStyle('none');
    setModalClass('');
  }



  useEffect(() => {
    getAllMovies();
  }, []);


  return (
    <div className="App">
      <Navbar totalCount={totalCount} onSearchChange={getAllMovies} />
      <main className='d-flex justify-content-center main'>
        {
          !error ? <MovieList movies={movies} movieHandler={openModal} /> : <h2>{error}</h2>
        }
      </main>

      <MovieDetail movie={movieDetail} display={modalStyle} show={modalClass} closeModal={closeModal}/>
    </div>
  );
}

export default App;
