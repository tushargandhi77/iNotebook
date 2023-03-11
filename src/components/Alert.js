import React from 'react'

function Alert(props) {
    const capitalize = (word) =>{
        if(word==="danger"){
            word = "error"
        }
    }
  return (
    <div style={{height:'50px'}}>
    {props.alert && <div className={`alert alert-warning alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong>:{props.alert.msg}
    </div>}
    </div>
  )
}

export default Alert