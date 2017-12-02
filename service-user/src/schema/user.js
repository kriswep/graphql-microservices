const user = `
# A user
type User {
  id: Int!
  # The users' title
  fullName: String
  # The users' mail adress
  email: String
}

# Queries from user service
type Query {
  # List of all our users
  allUsers: [User]
  # A single user
  user(id: Int!): User
}
`;

export default user;
