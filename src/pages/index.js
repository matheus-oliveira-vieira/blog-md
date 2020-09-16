import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/SEO'
const Index = () => {
  return (
    <div>
      <SEO title='PowerSites' description='Valor da descrição' />
      <h1>Index - PowerSites</h1>
      <p>
        <Link to='/blog'>Blog</Link>
      </p>
    </div>
  )
}

export default Index