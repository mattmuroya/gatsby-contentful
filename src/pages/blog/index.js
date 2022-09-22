import * as React from 'react';
import Layout from '../../components/layout';
import { Link, graphql } from 'gatsby';

import * as styles from './index.module.css';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <ul className={styles.blogList}>
        {data.allContentfulBlogPost.nodes.map((node) => (
          <li key={node.id}>
            <p className={styles.blogPostDate}>{node.createdAt}</p>
            <Link className={styles.blogPostLink} to={`./${node.slug}`}>
              <h2>{node.title} &rarr;</h2>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogPage;
export const Head = () => <title>Blog</title>;
export const query = graphql`
  query {
    allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
      nodes {
        id
        slug
        title
        createdAt(formatString: "MMM DD, YYYY")
        updatedAt
      }
    }
  }
`;
