import { graphql } from "../gql";

export const introductionQuery = graphql(`
  query IntroductionQuery($id: ID!) {
    introduction(where: { id: $id }) {
      id
      text
    }
  }
`);
