import * as React from 'react';
import { Link } from 'gatsby';

import * as styles from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link
              to="/"
              className={styles.navLink}
              activeClassName={styles.active}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={styles.navLink}
              activeClassName={styles.active}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {pageTitle && <h1>{pageTitle}</h1>}
        {children}
      </main>
    </div>
  );
};

export default Layout;
