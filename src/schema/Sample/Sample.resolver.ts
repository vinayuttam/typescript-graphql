import { GraphQLError, GraphQLString, GraphQLBoolean, GraphQLNonNull } from 'graphql';
import { pubsub } from '../../pubsub';

import { SampleType } from './Sample.type';

const TOPIC = 'SEND';

const SampleQueries = {
  hello: {
    type: SampleType,
    resolve: () => {
      pubsub.publish(TOPIC, { text: 'Hello from GraphQL SubScription' });
      return { text: 'Hello from GraphQL Query' }
    },
  },
};

const SampleMutations = {
  hello: {
    type: SampleType,
    resolve: () => ({ text: 'Hello from GraphQL Mutation' }),
  },
};

const SampleSubscriptions = {
  subscribeHello: {
    type: SampleType,
    subscribe: () => pubsub.asyncIterator(TOPIC),
    resolve: (source: any) => source,
  }
}

export { SampleQueries, SampleMutations, SampleSubscriptions };