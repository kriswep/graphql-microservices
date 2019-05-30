import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const PORT = process.env.PORT || 3000;

const postUrl = process.env.POST_URL || 'http://localhost:3010/graphql';
const userUrl = process.env.USER_URL || 'http://localhost:3020/graphql';

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'post', url: postUrl },
    { name: 'user', url: userUrl }
    // more services here
  ]
});

const startGateway = async () => {
  const { schema, executor } = await gateway.load();

  const server = new ApolloServer({ schema, executor });

  server.listen(PORT).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

startGateway();
