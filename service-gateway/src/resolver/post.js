export default mergeInfo => ({
  author: {
    fragment: `fragment PostFragment on Post { authorId }`,
    resolve(parent, args, context, info) {
      const id = parseInt(parent.authorId);
      return mergeInfo.delegate(
        'query',
        'user',
        {
          id
        },
        context,
        info
      );
    }
  }
});
