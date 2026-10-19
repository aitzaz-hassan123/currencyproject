import { useState} from "react"
import Checkresult from "./resultShowComponent"
function Result({fromvalue,tocurrency,rate})
{
  console.log(fromvalue,tocurrency,rate[tocurrency])
  let [result,setresult]=useState(null)
  function RESULT()
  {
    let calculation=Checkresult(fromvalue,tocurrency,rate)
    setresult(calculation)
  }
  return(
    <>
    <button  onClick={RESULT}>
              Check Currency
    </button>
    {result!==null && <h2>{result}</h2>}
    </>
  )

}
export default Result