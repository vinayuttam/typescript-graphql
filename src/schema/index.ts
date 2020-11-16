import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { SampleQueries, SampleMutations, SampleSubscriptions } from './Sample/Sample.resolver';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    description: 'Queries supported in this GraphQL API',
    fields: {
      ...SampleQueries,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutations',
    description: 'Mutations supported in this GraphQL API',
    fields: {
      ...SampleMutations,
    },
  }),
  subscription: new GraphQLObjectType({
    name: 'Subscriptions',
    description: 'Subscriptions supported in this GraphQL API',
    fields: {
      ...SampleSubscriptions
    },
  }),
});

export default schema;