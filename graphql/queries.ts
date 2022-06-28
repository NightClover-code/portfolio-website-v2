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
        }
        homeImg {
          width
          height
          alt
          url
        }
      }
    }
  }
`;

export const projectQuery = gql`
  query ProjectQuery($slug: String!) {
    project: projectItem(where: { slug: $slug }) {
      content {
        title
        description
        richTitle {
          raw
        }
        richTitleText
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
      showcaseImgs {
        width
        height
        alt
        url
      }
    }
  }
`;

export const projectItemsQuery = gql`
  query ProjectItemsQuery {
    projectItems {
      slug
    }
  }
`;

export const skillsQuery = gql`
  query SkillsQuery {
    skills {
      category
      skillItems {
        title
      }
    }
  }
`;
