import { graphql } from "../gql";

export const IntroductionQuery = graphql(`
  query IntroductionQuery($id: ID!) {
    introduction(where: { id: $id }) {
      id
      text
    }
  }
`);
