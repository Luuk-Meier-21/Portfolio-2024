import { graphql } from "../gql";

export const referenceQuery = graphql(`
  query ReferenceQuery($id: ID!) {
    reference(where: { id: $id }) {
      id
      label
      url
    }
  }
`);
