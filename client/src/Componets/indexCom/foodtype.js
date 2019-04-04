import React from "react"



function FoodTypeList(props){


    return(
        <li>
        <a href="#click" class="menu">
        <h2 class="menu-title menu-title_2nd">Food Type</h2>
        <ul class="menu-dropdown">
          <li>Italian</li>
          <li>Indian</li>
          <li>Chinese</li>
          <li>Mexican</li>
          <li>Thai</li>
          <li>Japanese</li>
          <li>Middle-Eastern</li>
          <li>French</li>
          <li>Fast-Food</li>
        </ul>
      </a>
    </li>

    )
}

export default FoodTypeList;