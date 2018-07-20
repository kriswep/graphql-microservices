import { merge } from 'lodash';
// import our resolvers
import userResolver from './user';

// fake another resolver
const rootResolvers = {};

// Merge all of the resolver objects together, just to show how
const resolvers = merge(rootResolvers, userResolver);

// export all resolvers
export default resolvers;
