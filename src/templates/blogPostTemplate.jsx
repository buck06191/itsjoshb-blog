/* eslint-disable react/prop-types */
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "../components/Layout";

const pagination = direction => {
  return direction === false ? null : (
    <>
      {direction && (
        <Link to={direction.fields.slug}>
          <p>{direction.frontmatter.title}</p>
        </Link>
      )}
    </>
  );
};

const BlogTemplate = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      {pagination(previous)}
      {pagination(next)}
    </Layout>
  );
};

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;

export default BlogTemplate;
