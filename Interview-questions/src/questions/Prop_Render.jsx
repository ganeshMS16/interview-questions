import React from 'react'
import PropTypes from "prop-types"

function Prop_Render({userName}) {
const myArr=userName.toLowerCase().split(" ")
const user=myArr.indexOf("sunil")
const Lname=myArr[user+1]

  return (
    <div>
        <h1>hello</h1>
        <h2>{Lname}</h2>
    </div>
  )
}
// SecondCharacterAfterSunil.propTypes = {
//     inputString: PropTypes.string.isRequired,
// };
  
export default Prop_Render;