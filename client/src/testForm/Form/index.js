import React from "react"


function FormCheck(props) {

    return (

        <form action="/menu/foods/">
            <div className="form-group">
                Search :
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={props.formvale} onChange={props.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={(e) => props.searchAll(e)} >Submit</button>
        </form>



    )


}


export default FormCheck;