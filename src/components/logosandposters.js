import React, { Component } from 'react';
import Logo1 from '../images/logos/auntyp3.png';
import Logo2 from '../images/logos/auntyp111.png';
import Logo3 from '../images/logos/chinwelogo3.png';
import Logo4 from '../images/logos/gnf1.png';
import Logo5 from '../images/logos/t52.png';
import Logo6 from '../images/logos/victoriab.png';

class Logosandposters extends Component {  
	 componentDidMount(){
	 	var slideIndex2 = 0;
		showSlides2();

		function showSlides2() {
		  var i;
		  var slides2 = document.getElementsByClassName("mySlides2");
		  for (i = 0; i < slides2.length; i++) {
		    slides2[i].style.display = "none";
		    slides2[i].style.opacity = "0";
		  }
		  slideIndex2++;
		  if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
		 
		  slides2[slideIndex2-1].style.display = "block";
		  slides2[slideIndex2-1].style.opacity = "1";  
		  setTimeout(showSlides2, 3200); // Change image every 2 seconds
		}
    }




    render(){
        return(
            <div id="logosnposters">
            	<center>
				<div id="aboutcontent">
					<div id="slide-container">
						<div id="slide-content">
							<div className="mySlides2 fade">
							  <img src={Logo5} />
							</div>
							<div className="mySlides2 fade">
							  <img src={Logo2} />
							</div>
							<div className="mySlides2 fade">
							  <img src={Logo3} />
							</div>
							<div className="mySlides2 fade">
								<img src={Logo4} />
							</div>	
							<div className="mySlides2 fade">
								<img src={Logo6} />
							</div>	
							<div className="mySlides2 fade">
								<img src={Logo1} />
							</div>	
						</div>
					</div>	
					<div id="content">
						<h1>LOGOS AND POSTERS</h1>
						<div id="line"></div>
						<div id="textspace">
							<span>With th use of ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR AND ADOBE AFTER-EFFECTS, I can also create brand designs such as Logos and posters. </span>
						</div>
					</div>	
				</div>
                	<p id="footer">DESIGNED BY SOREMIBOLU <i className="fa fa-copyright"/></p>
				</center>
			</div>
        );
    }
}

export default Logosandposters;
