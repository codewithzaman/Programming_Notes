import React, { useContext } from 'react'
import CompB from './CompB'
import { context } from './context/AppContext'

const CompA = () => {
    const {person} = useContext(context)
  return (
    <>
    <div>Component A 
        <h1>My name is :{person.name}</h1>
        <h1>My job  is :{person.job}</h1>
        <h1>My age is :{person.age}</h1>
        <h1>My address is :{person.address}</h1>
    </div>
    <CompB/>
    </>
  )
}

export default CompA