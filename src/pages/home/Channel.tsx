import React from 'react'
import { useParams } from 'react-router'
import QueryParams from '../../models/queryParams'

function Channel() {
  let { channel } = useParams<QueryParams>()

  return (
    <div>
      Channel {channel}
    </div>
  )
}

export default Channel
