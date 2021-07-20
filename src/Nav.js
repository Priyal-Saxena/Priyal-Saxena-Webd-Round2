import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav className="navigation">
      <ul className="list">
        <li className="item">
          <NavLink to="/Main" className="item-link">
            Home
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/League1" className="item-link">
            League1
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/League2" className="item-link">
            League2
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/LiveSores" className="item-link">
            LiveSores
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
