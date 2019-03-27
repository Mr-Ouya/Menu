import React from "react"


function UpdateCreatedBy(props) {

    return (
        <div className="form-group">
        Food :
<input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Creater" {...props} />
    </div> 

    )


}


export default UpdateCreatedBy;