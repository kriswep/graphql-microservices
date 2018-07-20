import { ApolloServer, gql } from 'apollo-server';
import typeDefs from './schema/user';
import resolvers from './resolver';

const PORT = process.env.PORT || 3020;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

// import schema from './schema';

// const app = express();
// const PORT = process.env.PORT || 3020;

// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
// app.use(
//   '/graphiql',
//   graphiqlExpress({
//     endpointURL: '/graphql',
//   }),
// );

// app.listen(PORT, () => {
//   console.log(`Post service server running on port ${PORT}.`);
// });
