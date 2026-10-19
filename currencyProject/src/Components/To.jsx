
function To({tocurrency,settocurrency,options=[]}
)
{
  return(
    <>
    <select value={tocurrency} onChange={(e)=>settocurrency(e.target.value)}>
 {
  options.map((option)=>{
    return(
      <option key={option} value={option}>{option}</option>
    )
  })
 }

    </select>
    </>
  )



}
export default To