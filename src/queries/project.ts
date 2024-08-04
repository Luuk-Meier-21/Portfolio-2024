import { graphql } from "../gql";

export const ProjectsListQuery = graphql(`
  query ProjectsListQuery {
    projects {
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
    project(where: { slug: $slug }) {
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
