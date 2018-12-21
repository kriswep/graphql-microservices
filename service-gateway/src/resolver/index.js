import makePostResolver from './post';
import makeUserResolver from './user';

const makeResolvers = ({ postSchema, userSchema }) => {
  const Post = makePostResolver(userSchema);
  const User = makeUserResolver(postSchema);

  return {
    Post,
    User
  };
};

export default makeResolvers;
