export default schema => ({
  posts: {
    fragment: `fragment UserFragment on User { id }`,
    resolve(parent, args, context, info) {
      const authorId = parseInt(parent.id);
      return info.mergeInfo.delegateToSchema({
        schema,
        operation: 'query',
        fieldName: 'postsByAuthorId',
        args: {
          authorId
        },
        context,
        info
      });
    }
  }
});
