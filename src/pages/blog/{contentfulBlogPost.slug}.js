import * as React from 'react';
import Layout from '../../components/layout';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const BlogPost = ({ data }) => {
  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        const { gatsbyImageData } = node.data.target;
        if (!gatsbyImageData) {
          // asset is not an image
          return null;
        }
        return <GatsbyImage image={gatsbyImageData} />;
      },
    },
  };

  return (
    <Layout pageTitle={data.contentfulBlogPost.title}>
      {renderRichText(data.contentfulBlogPost.body, options)}
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
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData
          }
        }
      }
    }
  }
`;
