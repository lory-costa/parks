import request from 'superagent'

export function getParkApprovalStatus (id) {
  return request.get(`/api/v1/park/${id}`)
    .then(res => {
      return res.body.parks
    })
}
