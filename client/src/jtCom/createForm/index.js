import React from "react"


function FormCreate(props) {

    return (

        <form action="/menu/create/">
            <div className="form-group">
                Resturant :
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={props.resturant} onChange={props.updateCreate} />
            </div>
            <div className="form-group">
                Food :
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={props.item} onChange={props.updateCreate} />
            </div>   <div className="form-group">
                Information :
    <input type="textarea" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={props.information} onChange={props.updateCreate} />
            </div>   <div className="form-group">
                Category :
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={props.category} onChange={props.updateCreate} />
            </div>   <div className="form-group">
                CreatedBy :
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={props.createdBy} onChange={props.updateCreate} />
            </div>   <div className="form-group">
                Price :
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={props.price} onChange={props.updateCreate} />
            </div>






            <button type="submit" className="btn btn-primary" onClick={(e) => props.create(e)} >Submit</button>
        </form>



    )


}


export default FormCreate;