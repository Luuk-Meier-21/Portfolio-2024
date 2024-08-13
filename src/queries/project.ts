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
