import React from "react"


function UpdatePrice(props) {

    return (
        <div className="form-group">
        Price :
<input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Price" {...props} />
    </div> 

    )


}


export default UpdatePrice;