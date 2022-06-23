//importing gql
import { gql } from '@apollo/client';

//queries
export const projectsQuery = gql`
  query ProjectsQuery {
    projects {
      category
      projectItems {
        slug
        content {
          title
          description
          richTitle {
            raw
          }
          link {
            website
            github
          }
          challenge {
            description {
              raw
            }
            challenges
          }
          technologies {
            raw
          }
        }

        homeImg {
          width
          height
          alt
          url
        }

        showcaseImgs {
          width
          height
          alt
          url
        }
      }
    }
  }
`;
