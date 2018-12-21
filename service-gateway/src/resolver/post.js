export default {
  author: {
    fragment: `fragment PostFragment on Post { authorId }`,
    resolve(parent, args, context, info) {
      const id = parseInt(parent.authorId);
      return info.mergeInfo.delegate(
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
};
