import { useEffect, useState} from "react";
function useCurrencyinfo(currency)
{
  let [data,setdata]=useState({})
  useEffect(()=>{
fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).then((respone)=>{
  return respone.json()
}).then((data)=>{
  console.log(data[currency])
setdata(data[currency])
})
  },[currency])


 return data



}
export default useCurrencyinfo