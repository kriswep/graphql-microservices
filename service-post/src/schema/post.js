const post = `
# A post entry
type Post {
  id: Int!
  # The posts' title
  title: String
  # The posts' actual content
  content: String
  author: String
}

# Queries from post service
type Query {
  # List of all our posts
  allPosts: [Post]
  # A single post
  post(id: Int!): Post
}
`;

export default post;
