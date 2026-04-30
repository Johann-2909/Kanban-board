import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users/papaplatte">Papaplatte</Link>
      <Link to="/users/fillow">Fillow</Link>
      <Link to="/users/Junusergin">Junus Ergin</Link>
    </nav>
  );
}

export default Nav;
