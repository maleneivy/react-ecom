import { Link } from "react-router-dom";
import { HeaderLinksList } from "./index.styles";

function Nav() {
    return (
        <nav>
<HeaderLinksList>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/contact">Contact</Link>
  </li>
  <li>
    <Link to="/about">About</Link>
  </li>
</HeaderLinksList>

        </nav>
    );
}

export default Nav; 
