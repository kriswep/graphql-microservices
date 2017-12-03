import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools';

const postUrl = process.env.POST_URL || 'http://localhost:3010/graphql';
// use the remote post schema
export default async () => {
  const link = new HttpLink({ uri: postUrl, fetch });

  const schema = await introspectSchema(link);

  return makeRemoteExecutableSchema({
    schema,
    link,
  });
};
