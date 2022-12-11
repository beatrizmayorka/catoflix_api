import { useState } from "react";
import { BiCameraMovie, BiExit, BiSearchAlt2 } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";


import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const isValidSearch = location.pathname.includes("login");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link>
          <BiCameraMovie /> Catoflix
        </Link>
      </h2>
      <form style={{ display: isValidSearch ? "none": "flex"}} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
        <Link className="exitButton" to="/login">
          <BiExit />
        </Link>
      </form>
    </nav>
  );
};

export default Navbar;