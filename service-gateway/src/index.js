import { ApolloServer } from 'apollo-server';

import makeSchema from './schema';

const PORT = process.env.PORT || 3000;

const startGateway = async () => {
  const schema = await makeSchema();

  const server = new ApolloServer({ schema });

  server.listen(PORT).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

startGateway();
