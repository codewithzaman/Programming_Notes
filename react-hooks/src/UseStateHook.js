import React,{useState} from 'react'
// UseState Hook:
// The Purpose of useState Hook is to handle reactive data. Any data that changes in the application is called state. When data changes re render the UI. useState function  has a default value that returns an array that have a first value  reactive value or variable or state and a second value a setter function.

const UseStateHook = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <button onClick={()=> setCount(count+1)}>
            {count}
        </button>
    </div>
  )
}

export default UseStateHook