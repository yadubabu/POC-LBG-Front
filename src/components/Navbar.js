import React from "react";
import "./style.css";

const Navbar = ({ login, register }) => {
  return (
    <div className="nav">
      {login === "" ? (
        <span style={{ opacity: "0.5", paddingTop: "9px" }}>Login</span>
      ) : (
        ""
      )}
      <nav>
        <a className="nav-item" href="/login">
          {login}
        </a>
        <a className="nav-item" href="/register">
          {register}
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
