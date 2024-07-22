import {CodegenConfig} from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema:
    "https://eu-central-1.cdn.hygraph.com/content/cl7rij5cj669q01uhae8r9wkh/master",
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
