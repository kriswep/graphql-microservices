import { find } from 'lodash';

// mock data
const posts = [
  {
    id: 1,
    authorId: 1,
    title: 'Cool first post',
    content: 'Hey, this is the first post from our post service',
  },
  {
    id: 2,
    authorId: 2,
    title: 'Cool second post',
    content: 'Hey, this is the second post from our post service',
  },
  {
    id: 3,
    authorId: 2,
    title: 'Cool third post',
    content: 'Hey, this is the third post from our post service',
  },
  {
    id: 4,
    authorId: 3,
    title: 'Cool fourth post',
    content: 'Hey, this is the fourth post from our post service',
  },
];

// add some small resolvers
const resolvers = {
  Query: {
    allPosts: () => posts,
    post: (_, { id }) => find(posts, { id: id }),
  },
};

export default resolvers;
