import { mergeSchemas } from 'graphql-tools';

import makePostSchema from '../remoteSchema/post';
import makeUserSchema from '../remoteSchema/user';

// use schema stitching technique to merge schems together
export default async () => {
  const postSchema = await makePostSchema();
  const userSchema = await makeUserSchema();

  const relationsSchema = `
  extend type User {
    posts: [Post]
  }

  extend type Post {
    author: User
  }
`;

  return mergeSchemas({
    schemas: [postSchema, userSchema, relationsSchema],
    resolvers: mergeInfo => ({
      User: {
        posts: {
          fragment: `fragment UserFragment on User { id }`,
          resolve(parent, args, context, info) {
            const authorId = parent.id;
            return mergeInfo.delegate(
              'query',
              'postsByAuthorId',
              {
                authorId,
              },
              context,
              info,
            );
          },
        },
      },
      Post: {
        author: {
          fragment: `fragment PostFragment on Post { authorId }`,
          resolve(parent, args, context, info) {
            const id = parent.authorId;
            console.log('id:', id);
            return mergeInfo.delegate(
              'query',
              'user',
              {
                id,
              },
              context,
              info,
            );
          },
        },
      },
    }),
  });
};
