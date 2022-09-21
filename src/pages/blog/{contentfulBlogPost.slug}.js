import * as React from 'react';
import Layout from '../../components/layout';
import { Link, graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.contentfulBlogPost.title}>
      {renderRichText(data.contentfulBlogPost.body)}
      <Link to="/blog">Return to Blog</Link>
    </Layout>
  );
};

export default BlogPost;
export const Head = ({ data }) => (
  <title>{data.contentfulBlogPost.title}</title>
);
export const query = graphql`
  query ($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      body {
        raw
      }
    }
  }
`;
