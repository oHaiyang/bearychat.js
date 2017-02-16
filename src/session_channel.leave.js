// Generated by ./scripts/generate-api with OpenAPI@1.0.0
// for full api documentation, visit https://github.com/bearyinnovative/OpenAPI
import fetch from 'isomorphic-fetch';
import { getBasePath } from './api';
import { validate } from './_validate';

export default function sessionChannelLeave(payload) {
  return new Promise((resolve, reject) => {
    const err = validate('POST', '/session_channel.leave', payload);
    if (err) {
      reject(err);
      return;
    }

    const opts = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(payload),
    };

    /* eslint-disable */
    const api = getBasePath('https://api.bearychat.com/v1') + '/session_channel.leave';
    /* eslint-enable */
    fetch(api, opts).then(resolve).catch(reject);
  });
}
