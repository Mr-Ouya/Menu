import React from "react"



function MainBodyList(props){


    return(

        <div className="mainbody">
            <div>
	<ul class="hList" style="list-style-type:none">
    {props.children}
    </ul>
</div>
</div>

    )
}

export default MainBodyList;