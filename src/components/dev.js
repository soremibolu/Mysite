import React, { Component } from 'react';
import Dev1 from '../images/dev/dev1.png';
import Dev2 from '../images/dev/dev2.png';
import Dev3 from '../images/dev/dev3.png';
import Dev4 from '../images/dev/dev4.png';

class Dev extends Component {  
	 componentDidMount(){
	 	var slideIndex3 = 0;
		showSlides3();

		function showSlides3() {
		  var i;
		  var slides3 = document.getElementsByClassName("mySlides3");
		  for (i = 0; i < slides3.length; i++) {
		    slides3[i].style.display = "none";
		    slides3[i].style.opacity = "0";
		  }
		  slideIndex3++;
		  if (slideIndex3 > slides3.length) {slideIndex3 = 1}    
		 
		  slides3[slideIndex3-1].style.display = "block";
		  slides3[slideIndex3-1].style.opacity = "1";  
		  setTimeout(showSlides3, 3200); // Change image every 2 seconds
		}
    }




    render(){
        return(
            <div id="dev">
            	<center>
				<div id="aboutcontent">
					<div id="slide-container">
						<div id="slide-content">
							<div className="mySlides3 fade">
							  <img src={Dev4} />
							</div>
							<div className="mySlides3 fade">
							  <img src={Dev1} />
							</div>
							<div className="mySlides3 fade">
							  <img src={Dev3} />
							</div>
							<div className="mySlides3 fade">
								<img src={Dev2} />
							</div>	
						</div>
					</div>	
					<div id="content">
						<h1>APP DEVELOPMENT</h1>
						<div id="line"></div>
						<div id="textspace">
							<span>With a University certifate in the field of computer science, I developed an great interest in coding and over the years developed myself in programming languages and frameworks like HTML|SCSS, JAVASCRIPT, PHP, REACTJS, NODEJS and recently PYTHON for the development of cool and efficient web applications . </span>
						</div>
					</div>	
				</div>
				</center>
			</div>
        );
    }
}

export default Dev;
