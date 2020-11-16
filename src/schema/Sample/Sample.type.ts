import { GraphQLNonNull, GraphQLString, GraphQLObjectType } from 'graphql';

const SampleType = new GraphQLObjectType({
  name: 'SampleType',
  description: 'SampleType fields',
  fields: {
    text: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Sample text field',
    },
  },
});

export { SampleType };