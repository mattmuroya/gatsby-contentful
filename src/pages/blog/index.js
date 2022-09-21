import * as React from 'react';
import Layout from '../../components/layout';
import { Link, graphql } from 'gatsby';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <ul>
        {data.allContentfulBlogPost.nodes.map((node) => (
          <li key={node.id}>
            <Link to={`./${node.slug}`}>{node.title}</Link>
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
    allContentfulBlogPost(sort: { fields: updatedAt, order: DESC }) {
      nodes {
        body {
          raw
        }
        id
        slug
        title
        createdAt(formatString: "MMM DD, YYYY")
        updatedAt
      }
    }
  }
`;
