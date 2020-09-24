import React from 'react'

const Author = props => {
  return (
    <div>
      <h1>Autores</h1>
      <pre>{JSON.stringify(props)}</pre>
    </div>
  )
}

export default Author