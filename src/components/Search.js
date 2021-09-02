import {useState} from "react";

function Search({onSearchChange}) {

  const [search, setSearch] = useState('');

  const searchChange = ({target}) => {
    const text = target.value.trim()
    setSearch(text);
  }

  const searchEvent = (evt) => {
    evt.preventDefault();
    onSearchChange(search);
  }

  const clearEvent = () => {
    setSearch('');
  }

  return (
    <form className="d-flex">
      <input className="form-control me-2"
             name='search'
             value={search}
             onChange={searchChange}
             type="search"
             placeholder="Search"
             aria-label="Search" />
      <button onClick={searchEvent} className="btn btn-outline-success mx-2" type="submit">Search</button>
      <button onClick={clearEvent} className="btn btn-outline-success" type="submit">Reset</button>
    </form>
  )
}

export default Search
