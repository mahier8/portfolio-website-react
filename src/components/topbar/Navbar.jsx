import "./navbar.scss";
import { Person, Mail } from "@material-ui/icons";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Mahier
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+82 010 4209 2304</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>mahier.sydow8@gmail.com</span>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/mahier8" target="_blank" rel="noreferrer"><GitHubIcon className="icon github" /></a>
          </div>
          <div className="itemContainer">
          <a href="https://www.linkedin.com/in/mahier-sydow-b4679166/" target="_blank" rel="noreferrer"><LinkedInIcon className="icon linkedIn" /></a>
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