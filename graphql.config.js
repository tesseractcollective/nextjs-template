require('dotenv').config();

module.exports = {
  schema: [process.env.GRAPHQL_URL],
  documents: ['./graphql/**/*.graphql'],
  generates: {
    'src/graphql/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
    },
  }
};