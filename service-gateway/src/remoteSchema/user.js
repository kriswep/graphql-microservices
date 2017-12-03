import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools';

const userUrl = process.env.USER_URL || 'http://localhost:3020/graphql';
// use the remote post schema
export default async () => {
  const link = new HttpLink({ uri: userUrl, fetch });

  const schema = await introspectSchema(link);

  return makeRemoteExecutableSchema({
    schema,
    link,
  });
};
