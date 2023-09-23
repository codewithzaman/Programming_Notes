import React, { useContext } from 'react'
import { context } from './context/AppContext';
const CompC = () => {
    const {quality,name} = useContext(context);
    // console.log("data",data);
  return (
    <div>Component C {quality} and {name}</div>
  )
}

export default CompC