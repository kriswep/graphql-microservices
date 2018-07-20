import { gql } from 'apollo-server';

const post = gql`
  # A post entry
  type Post {
    id: Int!
    # The posts' title
    title: String
    # The posts' actual content
    content: String
    authorId: String
  }

  type Identifier {
    # a unique hash to identify the running node process
    hash: String
  }

  # Queries from post service
  type Query {
    # List of all our posts
    allPosts: [Post]
    # A single post
    post(id: Int!): Post
    # A single post
    postsByAuthorId(authorId: Int!): [Post]
    # infos identifying running process
    identifier: Identifier
  }
`;

export default post;
