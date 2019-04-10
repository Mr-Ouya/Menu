import React from "react"



function Title(props) {


	return (
		<div class="topbar">
			<div id="container">
				<header class="cd-header">
					<div>
						<img class="logo" src="img\WOTM Logo.jpg.png" alt id="logo" />
					</div>
					<div>
						<h1 class="logotitle">山卄卂ㄒ'丂 ㄖ几 ㄒ卄乇 爪乇几ㄩ?</h1>
					</div>
					<a href="#0" class="cd-3d-nav-trigger">
						<script>
							$(window).scroll(function () {
						var theta = $(window).scrollTop() / 600 % Math.PI;
						$('#logo').css({transform: 'rotate(' + theta + 'rad)' });
																	});
				</script>
						<span></span>
					</a>
				</header>

				)
		}
		
		export default Title;
		
