import request from 'superagent'

export function getParks () {
  return request.get('/api/v1/park')
    .then(res => {
      return res.body.parks
    })
}
