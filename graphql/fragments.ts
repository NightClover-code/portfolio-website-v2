//importing gql
import { gql } from '@apollo/client';

//fragments
export const projectsFragment = gql`
  fragment ProjectsDetail on Project {
    title
    description
    image {
      url
    }
    slug
    author {
      name
      publishDate
      avatar {
        url
      }
      slug
    }
  }
`;
