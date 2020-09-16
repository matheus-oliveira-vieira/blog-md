import React from 'react'
import Helmet from 'react-helmet'
const SEO = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      {props.description && <meta name="description" content={props.description} />}
    </Helmet>
  )
}

export default SEO