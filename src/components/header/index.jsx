import React from "react";
import style from "./header.module.scss";

function Header() {
  return (
    <header className={style["sticky-header"]}>
      <div className={style["inner-header"]}>
        <div className={style.logo}>
          <h2>Dhara</h2>
        </div>
        <ul className={style.links}>
          <li className={style.active}>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
        <button className={style['hire-me']}>Hire me</button>
      </div>
    </header>
  );
}

export default Header;
