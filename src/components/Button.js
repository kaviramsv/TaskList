import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color,text, onClick}) =>{
  return (
    <button style={{color:color }} text={text} onClick={onClick}>add</button>
  )
}

Button.defaultProps ={
  color:"red",  
  text: "add"
}

Button.propTypes = {
  color : PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick : PropTypes.func
}
export default Button