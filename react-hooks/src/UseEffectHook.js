// UseEffectHook :
// By Using this hook, you tell the react that your components needs to do something after render. raect will remember the function u passed . This is a hook in react that is used to perform side effects. side effects are the results of state changing . we have some states in our application its value change from one state to an other . 


import { useState,useEffect } from 'react';


export default function Demo () {
const [count, setCount] = useState(0);
// useEffect(()=>{
// // that code we want to run 
// console.log("the count is :",count)
// //optional return function 
// return ()=>{
//     console.log("i am cleaned up!!");
// }
// },[count]) // The dependency Array is used to tell the useEffect what to do 
useEffect(() => {
  console.log("Counter Mounted");

  return () => {
    console.log("Counter Unmounted");
  }
}, [])// When  mounting then we will left this array empty. 
useEffect(() => {
  console.log("User Updated Count",count);

  return () => {
    console.log("Counter UseEffect Return",count);
  }
}, [count]) // when updating then  we will write the value in the array . 

return (
<div className='tutorial'>
<h1>Count: {count}</h1>
<button onClick={() => setCount (count - 1)}>
Decrement
</button>
<button onClick={() => setCount (count + 1)}>
Increment
</button>
</div>
);
}