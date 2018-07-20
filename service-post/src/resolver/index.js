import { merge } from 'lodash';
// import our resolvers
import postResolver from './post';

// fake another resolver
const rootResolvers = {};

// Merge all of the resolver objects together, just to show how
const resolvers = merge(rootResolvers, postResolver);

// export all resolvers
export default resolvers;
