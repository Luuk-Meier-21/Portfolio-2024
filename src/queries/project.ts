import {graphql} from "../gql";

export const ProjectsListQuery = graphql(`
  query ProjectsListQuery {
    projects {
      id
      name
    }
  }
`);

export const ProjectQuery = graphql(`
  query ProjectQuery($id: ID!) {
    project(where: {id: $id}) {
      name
      id
      date
      description {
        ... on Paragraph {
          id
          content {
            html
            text
          }
        }
      }
      slug
      client
      images {
        url
        size
        id
        height
      }
    }
  }
`);
