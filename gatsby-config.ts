import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  graphqlTypegen: true,
  jsxRuntime: 'automatic',
  plugins: ['gatsby-plugin-postcss'],
};

export default config;
