import React from "react"



function NavBar(props) {


	return (
        <nav className="cd-3d-nav-container">
		<ul className="cd-3d-nav">
			<li className="cd-selected">
				
                <Link to="/"  className={window.location.pathname === "/" ? "glyphicon": "glyphicon-home"}>
          Home
        </Link>
             <br/> <br/>
			</li>

			<li>				
				
                <Link to="/rate" className={window.location.pathname === "/rate" ? "glyphicon": "glyphicon-star"}>
                Rate a Dish
        </Link>
             <br/> <br/>			</li>

			<li>
            <Link to="/log" className={window.location.pathname === "/log" ? "glyphicon": "glyphicon-log-in"}>
            Log-in/Sign-up        
            </Link>			             
            <br/> <br/>			</li>


			<li>
            <Link to="/account" className={window.location.pathname === "/account" ? "glyphicon": "glyphicon-user"}>
            Your Account           
             </Link>			             
            <br/> <br/>				</li>
			
			<li>
            <Link to="/contact" className={window.location.pathname === "/contact" ? "glyphicon": "glyphicon-envelope"}>
Contact Us             
</Link>			             
            <br/> <br/>				
            </li>

		</ul> 
        
		<span className="cd-marker color-1"></span>	
	</nav>	
				)
		}
		
		export default NavBar;
		
