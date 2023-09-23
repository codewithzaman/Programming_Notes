import React, { useContext } from 'react'
import CompC from './CompC'
import { context } from './context/AppContext'

const CompB = () => {
    const {name} = useContext(context);
  return (
    <>
    <div>Component B {name}</div>
    <CompC/>
    </>
  )
}

export default CompB