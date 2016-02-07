// jshint unused:false
import globalHooks from '../../../hooks';
import { hooks as auth } from 'feathers-authentication';

let before = {
  all: [],
  find: [],
  get: [],
  create: [
    auth.hashPassword('password')
  ],
  update: [],
  patch: [],
  remove: []
};

let after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

export default { before, after };
