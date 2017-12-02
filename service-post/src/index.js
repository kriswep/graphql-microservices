import express from 'express';
// This package automatically parses JSON requests.
import bodyParser from 'body-parser';
// This package will handle GraphQL server requests and responses
// for you, based on your schema.
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import schema from './schema';

const app = express();
const PORT = process.env.PORT || 3010;

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  }),
);

app.listen(PORT, () => {
  console.log(`Post service server running on port ${PORT}.`);
});
