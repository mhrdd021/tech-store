import React, { useState } from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./Header.module.css";

//Icons
import logo from "../../assets/img/Group 27.png";
import searchIcon from "../../assets/img/search.svg";
import shopIcon from "../../assets/img/shopping-bag.svg";
import cross from "../../assets/img/cross.svg";
import hamburger from "../../assets/img/menu-burger.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.topheader}>
          <div
            className={menu ? styles.hamburgerOpen : styles.hamburger}
            onClick={() => setMenu(!menu)}
          >
            <img src={menu ? cross : hamburger} alt="hamburger" />
          </div>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.search}>
            <input type="search" placeholder="جستجو..." />
            <button>
              <img src={searchIcon} alt="search" />
            </button>
          </div>
          <div className={styles.buttons}>
            ورود | ثبت نام 
            
              سبد خرید
              <img src={shopIcon} alt="shop" />
            
          </div>
        </div>
      </div>
      <div className={styles.border}></div>
      <div className={styles.container}>
        <div className={styles.bottomheader}>
          <ul className={menu ? styles.navbaropen : styles.navbar}>
            <li className={styles.navitem}>
              صفحه اصلی
            </li>
            <li className={styles.navitem}>
              فروشگاه
            </li>
            <li className={styles.navitem}>
              مقالات
            </li>
            <li className={styles.navitem}>
              درباره ما
            </li>
            <li className={styles.navitem}>
              تماس با ما
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;