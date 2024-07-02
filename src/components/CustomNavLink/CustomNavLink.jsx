import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function CustomNavLink({ to1, to2, children }) {
  const location = useLocation();
  const isActive = location.pathname === to1 || new RegExp(`^${to2}`).test(location.pathname);
  return (
    <NavLink
      to={to1}
      className={isActive ? 'header__link header__link--active' : 'header__link'}
    >
      {children}
    </NavLink>
  );
}

export default CustomNavLink;
