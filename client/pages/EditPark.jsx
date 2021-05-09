import React, { useState, useEffect } from 'react'
import requestor from '../consume'

import { useParams, useHistory } from 'react-router-dom'

import ParkForm from '../components/ParkForm'

export default function EditEvent (props) {
  const [event, setEvent] = useState(null)
  const history = useHistory()
  const { id } = useParams()

  function getPark (id, consume = requestor) {
    return consume(`/park/${id}`)
      .then((res) => {
        const { title, date, volunteersNeeded, description } = res.body
        return { title, date, description, volunteersNeeded }
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  function updatePark (id, park, navigateTo, consume = requestor) {
    const parkToUpdate = {
      id: Number(id),
      ...park
    }
    return consume(`/park/${id}`, 'patch', parkToUpdate)
      .then(() => {
        navigateTo(`/park/${id}`)
        return null
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return
    getPark(id)
      .then((eventData) => {
        setEvent(eventData)
        return null
      })
  }, [])

  function submitPark (form) {
    updatePark(id, form, history.push)
  }

  return (
    event
      ? <ParkForm
        formData={event}
        action='Update Park'
        submitPark={submitPark}
      />
      : null
  )
}
