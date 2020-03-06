import { graphql, useStaticQuery } from "gatsby";

// eslint-disable-next-line import/prefer-default-export
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SITE_METADATA_QUERY {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return site.siteMetadata;
};
