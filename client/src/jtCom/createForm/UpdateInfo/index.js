import React from "react"


function UpdateInformation(props) {

    return (
        <div className="form-group">
        Food :
<textarea className="form-control" aria-describedby="emailHelp" placeholder="Enter Information" {...props} />
    </div> 

    )


}


export default UpdateInformation;