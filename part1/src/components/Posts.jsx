import React from 'react'

const Post = ({title, body}) => {
  return (
    <li>
    <p>{title}</p>
    <small>
      {body}
    </small>
  </li>
  )
}

export default Post