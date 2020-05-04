import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

const FooterWrapper = styled.footer`
  text-align: right;
  padding: 2rem 3rem 2rem 0rem;
  font-size: 0.75rem;
  span {
    font-size: 0.5rem;
  }
`;

interface DataProps {
  site: {
    siteMetadata: {
      title: string;
    };
    buildTime: string;
  };
}

const Footer = () => {
  const query = graphql`
    {
      site {
        buildTime(formatString: "DD.MM.YYYY")
      }
    }
  `;
  const render = (data: DataProps) => {
    return (
      <FooterWrapper>
        <br />
        Made With ❤️ by Masood Mohammad{' '}
      </FooterWrapper>
    );
  };

  return <StaticQuery query={query} render={render} />;
};

export { Footer };
