
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <nav className="header">
        <span>News APP</span>
        <div>
            <span>
            <Link to="/">Home</Link>
            </span> 
          <span>
            <Link to="/form">UserForm</Link>
          </span>
          <span>
            <Link to="/news">Latest News</Link>
          </span>
        </div>
      </nav>
    );
  };

export default Header;