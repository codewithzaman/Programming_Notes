// UseEffectHook :
// By Using this hook, you tell the react that your components needs to do something after render. raect will remember the function u passed . 


import { useState } from 'react';

export default function Demo () {
const [count, setCount] = useState(0);
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