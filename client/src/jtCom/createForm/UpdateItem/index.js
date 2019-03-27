import React from "react"


function UpdateItem(props) {

    return (
        <div className="form-group">
        Food :
<input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter FoodItem" {...props} />
    </div> 

    )


}


export default UpdateItem;