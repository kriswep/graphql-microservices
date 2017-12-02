import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

// import our types
import typeDefs from './post';
// import our resolvers
import postResolver from '../resolver/post';

const rootResolvers = {};

// Merge all of the resolver objects together, just to show how
const resolvers = merge(rootResolvers, postResolver);

// Generate the schema object from your types definition.
export default makeExecutableSchema({ typeDefs, resolvers });
