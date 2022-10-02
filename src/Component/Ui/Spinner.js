import React from 'react'
import Spin from '../../img/spinner.gif'

const Spinner = () => {
  return (
   <img src={Spin} style={{width: "200px", margin: "auto", display:"block"}} alt='loading'/>
  )
}

export default Spinner