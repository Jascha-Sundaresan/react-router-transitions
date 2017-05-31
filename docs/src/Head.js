import React from 'react'
import PropTypes from 'prop-types'

const Head = ({ children, description, name }) => (
  <section className="page-header">
    <h1 className="project-name">
      {name}
    </h1>
    <h2 className="project-tagline">
      {description}
    </h2>
    {children}
  </section>
)

Head.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Head
