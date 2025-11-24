import {useState, useEffect} from 'react'

const EffectTime = () => {
    const [count , setCount] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => setCount((prev) => prev + 1), 1000);

      return () => {
        clearInterval(timer);
      }

    }, [count]);




  return (
    <div>
      <button >Start</button>
    </div>
  )
}

export default EffectTime
