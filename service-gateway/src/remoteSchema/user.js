import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools';

// use the remote post schema
export default async () => {
  const link = new HttpLink({ uri: 'http://localhost:3020/graphql', fetch });

  const schema = await introspectSchema(link);

  return makeRemoteExecutableSchema({
    schema,
    link,
  });
};
