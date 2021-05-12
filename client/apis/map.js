import request from 'superagent'

export function getPark () {
  return request
    .get('/api/v1/park/')
    .then((res) => res.body.parks)
}
