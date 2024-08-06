import { graphql } from "../gql";

export const ProjectsListQuery = graphql(`
  query ProjectsListQuery {
    projects_b {
      slug
      id
      name
      date
      thumb {
        id
        fileName
        url
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

export const ProjectQuery = graphql(`
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
      client
      images {
        url
        size
        id
        height
        fileName
      }
    }
  }
`);
