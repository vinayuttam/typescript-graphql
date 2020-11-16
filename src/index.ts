import express from 'express';
import { createServer } from 'http';
import { ApolloServer, gql } from 'apollo-server-express';

import schema from './schema';
import config from './config';

const app = express();

const server = new ApolloServer({
  schema,
  subscriptions: {
    onConnect: (connectionParams, webSocket, context) => {
      console.log('Connected to socket');
    },
    onDisconnect: (webSocket, context) => {
      console.log('Disconnected from socket');
    },
  },
});

server.applyMiddleware({ app });

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: config.port }, () => {
  console.log(`🚀 Server ready at http://localhost:${config.port}${server.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at ws://localhost:${config.port}${server.subscriptionsPath}`);
});