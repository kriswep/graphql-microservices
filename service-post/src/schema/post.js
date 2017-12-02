const typeDefs = `
type Post {
  id: Int!
  title: String
  content: String
  author: String
}

type Query {
  allPosts: [Post!]!
}
`;

export default typeDefs;
