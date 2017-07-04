import React from "react"
import PropTypes from "prop-types"
import Remarkable from "react-remarkable"
import sanitize from "sanitize-html"

const sanitizeOptions = {
  textFilter: function(text) {
    return text
      .replace(/&quot;/g, "\"")
  }
}

function Markdown({ source }) {
<<<<<<< HEAD
=======
  const sanitized = sanitize(source, sanitizeOptions)

  // sometimes the sanitizer returns "undefined" as a string
  if(!source || !sanitized || sanitized === "undefined") {
    return null
  }

>>>>>>> swagger-api/master
  return <Remarkable
    options={{html: true, typographer: true, linkify: true, linkTarget: "_blank"}}
    source={source}
    ></Remarkable>
}

Markdown.propTypes = {
  source: PropTypes.string.isRequired
}

export default Markdown
