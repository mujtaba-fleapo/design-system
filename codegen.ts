import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://service-graphql-by55mka62q-uc.a.run.app/graphql',
  // schema: 'http://localhost:8080/graphql',
  documents: ['app/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/generated/': {
      preset: 'client'
    }
  }
};

export default config;
