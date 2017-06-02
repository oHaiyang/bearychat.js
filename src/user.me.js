// Generated by ./scripts/generate-api with OpenAPI@1.0.0
// for full api documentation, visit https://github.com/bearyinnovative/OpenAPI
import qs from 'querystring';
import fetch from 'isomorphic-fetch';
import { getBasePath } from './api';
import { validate } from './_validate';

export default function userMe(payload) {
  return new Promise((resolve, reject) => {
    const err = validate('GET', '/user.me', payload);
    if (err) {
      reject(err);
      return;
    }

    const opts = {
      headers: { Accept: 'application/json' },
      method: 'GET',
    };

    /* eslint-disable */
    const api = getBasePath('https://api.stage.bearychat.com/v1') + '/user.me?' + qs.stringify(payload);
    /* eslint-enable */
    fetch(api, opts).then(resolve).catch(reject);
  });
}
