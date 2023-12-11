import React from 'react'
import {useParams} from 'react-router-dom'

function Post() {
    const params = useParams()
  return (
    <div>
      <h1>POST: {params.id} </h1>
      <h1>Name: {params.name} </h1>
    </div>
  )
}

export default Post