import React from "react"


function UpdateResturant(props) {

    return (
        <div className="form-group">
        Resturant :
<input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Resturant" {...props} />
    </div> 

    )


}


export default UpdateResturant;