import makePostResolver from './post';
import makeUserResolver from './user';

const resolvers = mergeInfo => {
  const Post = makePostResolver(mergeInfo);
  const User = makeUserResolver(mergeInfo);

  return {
    Post,
    User,
  };
};

export default resolvers;
