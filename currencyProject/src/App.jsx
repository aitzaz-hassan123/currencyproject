import useCurrencyinfo from './Hooks/useCurrencyInfo.js'
import From from './Components/From.jsx'
import { useState } from 'react'
import To from './Components/To.jsx'
import Result from './Components/Result.jsx'
function App() {
  let [fromvalue,setFromValue]=useState(1)
  let [fromcurrency,setcurrency]=useState("inr")
  let realdata=useCurrencyinfo(fromcurrency)
  let [tovalue,settoValue]=useState(1)
  let [tocurrency,settocurrency]=useState("inr")
  console.log('1')
  console.log(realdata)
  let optionss=Object.keys(realdata)
  function Swap()
  {
    setcurrency(tocurrency)
    settocurrency(fromcurrency)
  }
  return (
    <>
    <label>From</label>
      <From value={fromvalue} onChangeValue={setFromValue}
       optionsss={optionss}
      select={fromcurrency} 
      setSelect={setcurrency}
      />
      <button onClick={Swap}>Swap</button>
    <label>To</label>

      <To value={tovalue} updateValue={settoValue} tocurrency={tocurrency} settocurrency={settocurrency} options={optionss} />
       <Result fromvalue={fromvalue} tocurrency={tocurrency} rate={realdata} fromcurrency={fromcurrency} />
    </>
  )
}

export default App
