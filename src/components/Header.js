import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ name }) => {

  const onClick =(e)=> {
    console.log(e)     
  }
  return ( <>
    <h2 style={headingStyle}>{name}</h2>
    <Button color="green" onClick={onClick}/>
    </>
  )
}
Header.defaultProps = {
  name: "To Do List",
  number: 2
}


Header.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number.isRequired
}
const headingStyle =
{
  color: "red",
  backgroundColor: "yellow",
  display: "inline-block",
  width: "50em", 
  height: "4em",
  padding: "2em"
}
export default Header