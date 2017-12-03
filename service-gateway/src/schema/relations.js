const relationsSchema = `
extend type User {
  posts: [Post]
}

extend type Post {
  author: User
}
`;

export default relationsSchema;
