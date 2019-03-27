import React from "react"


function UpdateCategory(props) {

    return (

        <div className="form-group">
        Resturant :
<input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Category" {...props}/>
    </div>


    )


}


export default UpdateCategory;