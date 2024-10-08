import { graphql } from "../gql";

export const projectsListQuery = graphql(`
  query ProjectsListQuery {
    projects_b(where: { documentInStages_some: { stage: PUBLISHED } }) {
      slug
      id
      name
      date
      images {
        url
        id
        height
        width
        fileName
      }
      categories {
        slug
        label
        projects {
          slug
        }
      }
    }
  }
`);

export const projectQuery = graphql(`
  query ProjectQuery($slug: String!) {
    project_b(where: { slug: $slug }) {
      slug
      id
      name
      date
      description {
        ... on Paragraph {
          id
          content {
            html
            text
          }
        }
        ... on Link {
          id
          label
          url
        }
      }
      images {
        url
        id
        height
        width
        fileName
      }
      categories {
        slug
        id
        label
      }
      info {
        ... on InfoItem {
          id
          link {
            url
            label
          }
          label
        }
      }
    }
  }
`);
