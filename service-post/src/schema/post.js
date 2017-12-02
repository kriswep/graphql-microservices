const post = `
# A post entry
type Post {
  id: Int!
  # The posts' title
  title: String
  # The posts' actual content
  content: String
  authorId: String
}

# Queries from post service
type Query {
  # List of all our posts
  allPosts: [Post]
  # A single post
  post(id: Int!): Post
  # A single post
  postByAuthorId(authorId: Int!): [Post]
}
`;

export default post;
