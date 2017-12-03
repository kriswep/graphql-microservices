const resolvers = mergeInfo => ({
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
});

export default resolvers;
