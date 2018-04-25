const { makeExecutableSchema } = require('graphql-tools');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const noticiaSchema = require('../components/noticia/noticia.gql.schema');
const problemaSchema = require('../components/problema/problema.gql.schema');
const noticiaResolvers = require('../components/noticia/noticia.gql.resolvers');
const problemaResolvers = require('../components/problema/problema.gql.resolvers');

const queryRoot = `
  type Query {
    estado: String!
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [
    queryRoot,
    noticiaSchema,
    problemaSchema,
  ],
  resolvers: {
    Query: () => 'ok',
    ProblemaQuery: problemaResolvers,
    NoticiaQuery: noticiaResolvers,
  },
});

module.exports = {
  graphqlExpress: graphqlExpress(req => ({
    schema,
    context: {
      req,
    },
    formatError: (err) => { console.log(err.stack); return err; }, // eslint-disable-line
  })),
  graphiqlExpress,
};
