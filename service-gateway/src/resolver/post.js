export default schema => ({
  author: {
    fragment: `fragment PostFragment on Post { authorId }`,
    resolve(parent, args, context, info) {
      const id = parseInt(parent.authorId);
      return info.mergeInfo.delegateToSchema({
        schema,
        operation: 'query',
        fieldName: 'user',
        args: {
          id
        },
        context,
        info
      });
    }
  }
});
