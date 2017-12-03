import { mergeSchemas } from 'graphql-tools';

import resolvers from '../resolver';

import makePostSchema from '../remoteSchema/post';
import makeUserSchema from '../remoteSchema/user';
import relationsSchema from './relations';

// use schema stitching technique to merge schems together
export default async () => {
  const postSchema = await makePostSchema();
  const userSchema = await makeUserSchema();

  return mergeSchemas({
    schemas: [postSchema, userSchema, relationsSchema],
    resolvers,
  });
};
