const a = useRef(0);

useEffect(() => {
    a.current = a.current + 1
    console.log(`rendering and the value of a is ${a.current}..`)
});

//useRef is use to pesist the value of variable 

//////

const ref = useRef()

useEffect(() => {
    
    console.log(`rendering..`)
    ref.current.style.backgroundColor = 'red'
});


<button ref = {ref} onClick = {()=> 
    setCount((count) => count + 1)}>count is ${count}</button>

//we can directly access any dom element using ref


Conditional Rendering : Conditional rendering in React allows you to render different components or elements based on certain conditions. It's similar to how conditions work in JavaScript, but it is used within the context of JSX.


import React from 'react';
import ReactDOM from 'react-dom';

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}

function App() {
  return (
    <div>
      <Greeting isLoggedIn={true} />
      <Greeting isLoggedIn={false} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
