import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <>
    <h1>{post.frontmatter.title}</h1>
    <p>
      Posted by {post.frontmatter.author} on {post.frontmatter.date}
    </p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <Link to="/blog"> &larr; Back </Link>
  </>
);

export default PostTemplate;
