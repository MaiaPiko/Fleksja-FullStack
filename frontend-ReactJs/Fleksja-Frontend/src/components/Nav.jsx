import { Link } from "react-router-dom";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg  ">
      <div className="container-fluid">
        <Link className="navbar-brand ms-1" to="/">
          Fleksja
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            
              
              <li className="nav-item">
          <Link className="navbar-brand" style={{fontSize:"0.8rem"}} to="/about">O Fleksji</Link>
        </li>
       
        </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
