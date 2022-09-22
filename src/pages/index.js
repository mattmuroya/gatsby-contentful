import * as React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

import * as styles from './index.module.css';

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Gatsby Contentful Demo</h1>
        <div className={styles.headerText}>
          <p>
            This is a blog website built with{' '}
            <a href="https://www.gatsbyjs.com/">Gatsby</a>. Blog posts are
            written in <a href="https://www.contentful.com/">Contentful</a>'s
            headless CMS and queried using their GraphQL API.
          </p>
          <p>
            <Link to="/blog">Check out the blog!</Link>
          </p>
        </div>
      </header>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Gatsby Blog</title>;
