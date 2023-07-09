import React from "react";
import style from "./header.module.scss";
import Link from "next/link";

function Header() {
  return (
    <header className={style["sticky-header"]}>
      <div className={style["inner-header"]}>
        <div className={style.logo}>
          <h2>Dhara</h2>
        </div>
        <ul className={style.links}>
          <Link href={"/#home"} className={style.active}>
            Home
          </Link>
          <Link href={"/#about"}>About</Link>
          <Link href={"/#experience"}>Experience</Link>
          <Link href={"/#resume"}>Resume</Link>
          <Link href={"/#contact"}>Contact</Link>
        </ul>
        <button className={style["hire-me"]}>Hire me</button>
      </div>
    </header>
  );
}

export default Header;
