import express from 'express';
// This package automatically parses JSON requests.
import bodyParser from 'body-parser';
// This package will handle GraphQL server requests and responses
// for you, based on your schema.
// import { graphqlExpress } from 'apollo-server-express';
import { graphqlExpress } from 'apollo-server-express';

import schema from './schema';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.listen(PORT, () => {
  console.log(`Post service server running on port ${PORT}.`);
});
