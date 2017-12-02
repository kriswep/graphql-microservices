import { makeExecutableSchema } from 'graphql-tools';

// import our types
import post from './post';

// Generate the schema object from your types definition.
export default makeExecutableSchema({ typeDefs: post });
