function From({value,optionsss=[],onChangeValue,select,setSelect})
{
  function onChangeFromValue(value)
  {
    if(value>0)
    {
      onChangeValue(value)
    }
  }
return(
  <>
  <input type="number" value={value} onChange={(e)=>onChangeFromValue(e.target.value)} />
<select value={select} onChange={(e)=>setSelect(e.target.value)}>
{
optionsss.map((option)=>{
  return ( <option key={option} value={option}> {option}</option>)
})

}

</select>
  </>
)

}
export default From