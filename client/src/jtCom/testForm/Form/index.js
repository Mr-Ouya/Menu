import React from "react"


function FormCheck(props) {

    return (

        <div className="form-group">
            Search :
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" {...props} />
        </div>




    )


}


export default FormCheck;