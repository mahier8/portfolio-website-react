import "./navbar.scss";
import { Person, Mail } from "@material-ui/icons";

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Portfolio
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+82 010 4209 2304</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>mahier.sydow8@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;