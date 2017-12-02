import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

// import our types
import typeDefs from './user';
// import our resolvers
import userResolver from '../resolver/user';

const rootResolvers = {};

// Merge all of the resolver objects together, just to show how
const resolvers = merge(rootResolvers, userResolver);

// Generate the schema object from your types definition.
export default makeExecutableSchema({ typeDefs, resolvers });
