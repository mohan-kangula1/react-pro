import React from 'react';
// function Greets(){
//   return <h1>Hello mohan</h1>
// }
const Greets = (name,aliasName)=>{
  // console.log(props)
return (

  <div>
    <h1>Hello {name} a.k.a {aliasName}</h1>
    {/* {props.children} */}
  </div>
)
} 

export default Greets;