import requestor from '../consume'

export function getPark (id, consume = requestor) {
  return consume(`/park/${id}`)
    .then((res) => {
      const park = res.body
      return park
    })
    .catch((error) => {
      console.log(error.message)
    })
}
