import React from "react";
import { navLinks } from "../utils/data";
import Link from "next/link";
import styles from '../styles/Home.module.css'
export default function Header() {
  return (
    <header>
      
      <nav className={styles.nav}>
        <div className="brand" style={{margin:"auto", padding: "auto"}}>
        <h3>S&S</h3>
      </div>
        {navLinks.map((link, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <ul className={styles.ul}>
                
              <Link href={link.path}>
                <li key={index}>{link.name}</li>
              </Link>
            </ul>
          );
        })}
      </nav>
    </header>
  );
}

