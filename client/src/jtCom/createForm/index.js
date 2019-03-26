import React from "react"


function FormCreate(props) {

    return (

        <form action="/menu/create/">
            <div className="form-group">
                Resturant :
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={props.resturant} onChange={props.handleChange} />
            </div>
            <div className="form-group">
                Search :
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={props.item} onChange={props.handleChange} />
            </div>   <div className="form-group">
                Search :
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={props.information} onChange={props.handleChange} />
            </div>   <div className="form-group">
                Search :
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={props.category} onChange={props.handleChange} />
            </div>   <div className="form-group">
                Search :
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={props.createdBy} onChange={props.handleChange} />
            </div>   <div className="form-group">
                Search :
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={props.formvale} onChange={props.handleChange} />
            </div>






            <button type="submit" className="btn btn-primary" onClick={(e) => props.create(e)} >Submit</button>
        </form>



    )


}


export default FormCreate;