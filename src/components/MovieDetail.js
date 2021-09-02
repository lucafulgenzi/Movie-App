export const MovieDetail = ({movie,display, show, closeModal}) => {
  return (
    <div className={"modal fade" + show } style={{ display: display, marginTop: "70px" }} id="movieModal" tabIndex={-1} aria-labelledby="movieModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="movieModalLabel">{movie.Title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}/>
          </div>
          <div className="modal-body">
            {movie}
          </div>
        </div>
      </div>
    </div>
  )
}
