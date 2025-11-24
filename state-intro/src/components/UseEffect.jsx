import {useEffect, useState} from 'react'

const UseEffect = () => {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log('setinterval executed');
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        return () => {
            console.log('cleanup executed');
            clearInterval(interval);
        }
    }, []);

  return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default UseEffect
