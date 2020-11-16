import express from 'express';
import 'reflect-metadata';
import { createServer } from 'http';
import { ApolloServer, gql } from 'apollo-server-express';
import { createConnection } from 'typeorm';

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


createConnection().then(async connection => {
  console.log('Successfully connected to database!');

  httpServer.listen({ port: config.port }, () => {
    console.log(`🚀 Server ready at http://localhost:${config.port}${server.graphqlPath}`);
    console.log(`🚀 Subscriptions ready at ws://localhost:${config.port}${server.subscriptionsPath}`);
  });
}).catch(error => {
  console.log(error)
  process.exit(1);
});

