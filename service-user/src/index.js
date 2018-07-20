import { ApolloServer } from 'apollo-server';
import typeDefs from './schema/user';
import resolvers from './resolver';

const PORT = process.env.PORT || 3020;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
