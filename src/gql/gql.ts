/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query IntroductionQuery($id: ID!) {\n    introduction(where: { id: $id }) {\n      id\n      text\n    }\n  }\n": types.IntroductionQueryDocument,
    "\n  query ProjectsListQuery {\n    projects_b {\n      slug\n      id\n      name\n      date\n      thumb {\n        id\n        fileName\n        url\n      }\n      images {\n        url\n        id\n        height\n        width\n        fileName\n      }\n      categories {\n        slug\n        label\n        projects {\n          slug\n        }\n      }\n    }\n  }\n": types.ProjectsListQueryDocument,
    "\n  query ProjectQuery($slug: String!) {\n    project_b(where: { slug: $slug }) {\n      slug\n      id\n      name\n      date\n      description {\n        ... on Paragraph {\n          id\n          content {\n            html\n            text\n          }\n        }\n        ... on Link {\n          id\n          label\n          url\n        }\n      }\n      client\n      images {\n        url\n        id\n        height\n        width\n        fileName\n      }\n      categories {\n        slug\n        id\n        label\n      }\n      info {\n        ... on InfoItem {\n          id\n          link {\n            url\n            label\n          }\n          label\n        }\n      }\n    }\n  }\n": types.ProjectQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query IntroductionQuery($id: ID!) {\n    introduction(where: { id: $id }) {\n      id\n      text\n    }\n  }\n"): (typeof documents)["\n  query IntroductionQuery($id: ID!) {\n    introduction(where: { id: $id }) {\n      id\n      text\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ProjectsListQuery {\n    projects_b {\n      slug\n      id\n      name\n      date\n      thumb {\n        id\n        fileName\n        url\n      }\n      images {\n        url\n        id\n        height\n        width\n        fileName\n      }\n      categories {\n        slug\n        label\n        projects {\n          slug\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ProjectsListQuery {\n    projects_b {\n      slug\n      id\n      name\n      date\n      thumb {\n        id\n        fileName\n        url\n      }\n      images {\n        url\n        id\n        height\n        width\n        fileName\n      }\n      categories {\n        slug\n        label\n        projects {\n          slug\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ProjectQuery($slug: String!) {\n    project_b(where: { slug: $slug }) {\n      slug\n      id\n      name\n      date\n      description {\n        ... on Paragraph {\n          id\n          content {\n            html\n            text\n          }\n        }\n        ... on Link {\n          id\n          label\n          url\n        }\n      }\n      client\n      images {\n        url\n        id\n        height\n        width\n        fileName\n      }\n      categories {\n        slug\n        id\n        label\n      }\n      info {\n        ... on InfoItem {\n          id\n          link {\n            url\n            label\n          }\n          label\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ProjectQuery($slug: String!) {\n    project_b(where: { slug: $slug }) {\n      slug\n      id\n      name\n      date\n      description {\n        ... on Paragraph {\n          id\n          content {\n            html\n            text\n          }\n        }\n        ... on Link {\n          id\n          label\n          url\n        }\n      }\n      client\n      images {\n        url\n        id\n        height\n        width\n        fileName\n      }\n      categories {\n        slug\n        id\n        label\n      }\n      info {\n        ... on InfoItem {\n          id\n          link {\n            url\n            label\n          }\n          label\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;