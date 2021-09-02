import Search from "./Search";

function Navbar({onSearchChange, totalCount}) {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <p className="navbar-brand" >Movies App - {totalCount} movies find</p>
          <Search onSearchChange={onSearchChange}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
