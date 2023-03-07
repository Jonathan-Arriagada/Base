import "./Navbar.css";
import logo from "../img/streamingFeximage.jpg";
import { NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function Navbar() {

  return (
    <header>
      <nav className="Navbar">
        <div className="left-nav">  
        <Link to="/"><img className="brand-logo" src={logo} alt="logo" /></Link>
          <div className="navbar-links">
            <div className="navbar-items">
              <NavDropdown title="Streaming" id="basic-nav-dropdown" className="navbar-item">
              <NavDropdown.Item> <Link className="nolink" to="/name/Netflix">
                Netflix</Link>
                </NavDropdown.Item> 
                <NavDropdown.Item><Link className="nolink" to="/name/Movistar Play">
                  Movistar Play </Link>
                </NavDropdown.Item>
                <NavDropdown.Item> <Link className="nolink" to="/name/Amazon Prime">
                  Amazon Prime </Link>
                </NavDropdown.Item>
                <NavDropdown.Item> <Link className="nolink" to="/name/Spotify Premium">
                  Spotify Premium </Link>
                </NavDropdown.Item>
                <NavDropdown.Item> <Link className="nolink" to="/name/Youtube Premium">
                  Youtube Premium </Link>
                </NavDropdown.Item>
                <NavDropdown.Item> <Link className="nolink" to="/name/Paramount">
                  Paramount </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="navbar-item"><Link className="nolink2" to="/name/Canva PRO">Canva PRO </Link></Nav.Link>
              <NavDropdown title="Diseños Editables" id="basic-nav-dropdown" className="navbar-item">
              <NavDropdown.Item> <Link className="nolink" to="/name/Adobe">
                Adobe</Link>
              </NavDropdown.Item> 
              <NavDropdown.Item> <Link className="nolink" to="/name/Artes Canva">
              Artes Canva</Link>
              </NavDropdown.Item> 
              </NavDropdown>
              <Nav.Link className="navbar-item"><Link className="nolink2" to="/name/Google Sheets">Google Sheets </Link></Nav.Link>
            </div>
          </div>
        </div>
      <CartWidget/>
      </nav>
    </header>
  );
}

export default Navbar;
