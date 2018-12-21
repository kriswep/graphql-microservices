export default mergeInfo => ({
  posts: {
    fragment: `fragment UserFragment on User { id }`,
    resolve(parent, args, context, info) {
      const authorId = parseInt(parent.id);
      return mergeInfo.delegate(
        'query',
        'postsByAuthorId',
        {
          authorId
        },
        context,
        info
      );
    }
  }
});
