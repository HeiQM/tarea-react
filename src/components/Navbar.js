const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light pt-5 pl-5">
            <p className="h2 text-primary" href="#">Poderío UI</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
              <ul className="navbar-nav mr-5 w-50 justify-content-end mt-3">
                <li className="nav-item active mx-3">
                  <a className="nav-link" href="1">Home <i className="fas fa-chevron-right"></i></a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link" href="2">Link <i className="fas fa-chevron-right"></i></a>
                </li>
                <li className="nav-item mx-3">
                    <a className="nav-link" href="3">Link <i className="fas fa-chevron-right"></i></a>
                  </li>
              </ul>
              <form className="form-inline my-3 my-lg-0 mr-5">
                <button className="btn btn-primary my-2 my-sm-0 ml-sm-2" type="submit">Comprar <i className="fas fa-arrow-right"></i></button>
              </form>
            </div>
          </nav>
        ) 
}
 
export default Navbar;