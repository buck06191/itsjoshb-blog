import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import Header from "./Header";

const AppStyles = styled.main`
  width: 800px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <AppStyles>
      <Header siteTitle={title} siteDescription={description} />
      {children}
    </AppStyles>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
