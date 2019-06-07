// https://blog.apollographql.com/4-simple-ways-to-call-a-graphql-api-a6807bcdb355
require("isomorphic-fetch");

const query = `{
  allPosts {
    id
    title
    author {
      fullName
      email
      posts {
        title
      }
    }
  }
  allUsers {
    id
    posts {
      title
    }
  }
  post(id: 1) {
    title
  }
}`;

test("gateway should response to query", async () => {
  await fetch("http://localhost:3000/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  })
    .then(res => res.json())
    .then(res => {
      expect(res).toMatchSnapshot();
    });
});

test("gateway should answer with identifier", async () => {
  await fetch("http://localhost:3000/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: "{ identifier { hash } }" })
  })
    .then(res => res.json())
    .then(res => {
      expect(res.data.identifier.hash).toBeDefined();
    });
});
