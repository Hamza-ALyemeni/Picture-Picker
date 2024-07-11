import { useEffect , useState } from "react";
export default function ProgressBar({timer}) {
const[remainingTime , setRemainingTime ] = useState(timer);

  useEffect(() =>{
    const timer = setInterval(()=>{
      console.log('INTERVAL');
      setRemainingTime( prev => prev - 10);
    },10)

    return () => {
      clearInterval(timer)
    }

  },[]);
 
  return <progress value={remainingTime} max={timer}/>
}