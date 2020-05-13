import React, { Component } from 'react';
import Cover1 from '../images/songcovers/bara-bllie-jean2.png';
import Cover3 from '../images/songcovers/illvennk.png';
import Cover4 from '../images/songcovers/stronger2.png';
import Art1 from '../images/digitalart/bara.png';
import Art2 from '../images/digitalart/climb.png';
import Art3 from '../images/digitalart/furandredshades.png';
import Art4 from '../images/digitalart/kachi1.png';
import Art5 from '../images/digitalart/lions.png';
import Art6 from '../images/digitalart/hands.png';
import Art7 from '../images/digitalart/prettyshades.png';
import Art8 from '../images/digitalart/reedsmind.png';
import Art9 from '../images/digitalart/ririgoldarmflowerface1.jpg';
import Art10 from '../images/digitalart/swords-and-claws.png';
import Art11 from '../images/digitalart/tril1.jpg';
import Art12 from '../images/digitalart/tunde.png';
import Art13 from '../images/digitalart/xxxtentacion2.png';


class Digitalart extends Component {  
	 componentDidMount(){
	 	var slideIndex = 0;
		showSlides();

		function showSlides() {
		  var i;
		  var slides = document.getElementsByClassName("mySlides");
		  for (i = 0; i < slides.length; i++) {
		    slides[i].style.display = "none";
		    slides[i].style.opacity = "0";
		  }
		  slideIndex++;
		  if (slideIndex > slides.length) {slideIndex = 1}    
		 
		  slides[slideIndex-1].style.display = "block";
		  slides[slideIndex-1].style.opacity = "1";  
		  setTimeout(showSlides, 3200); // Change image every 2 seconds
		}
    }




    render(){
        return(
            <div id="digitalart">
            	<center>
				<div id="aboutcontent">
					<div id="slide-container">
						<div id="slide-content">
							<div className="mySlides fade">
							  <img src={Art13} />
							</div>
							<div className="mySlides fade">
							  <img src={Art9} />
							</div>
							<div className="mySlides fade">
								<img src={Art4} />
							</div>
							<div className="mySlides fade">
								<img src={Cover1} />
							</div>		
							<div className="mySlides fade">
								<img src={Art1} />
							</div>	
							<div className="mySlides fade">
								<img src={Art3} />
							</div>
							<div className="mySlides fade">
								<img src={Cover3} />
							</div>	
							<div className="mySlides fade">
								<img src={Art7} />
							</div>	
							<div className="mySlides fade">
								<img src={Art8} />
							</div>	
							<div className="mySlides fade">
								<img src={Cover4} />
							</div>
							<div className="mySlides fade">
								<img src={Art12} />
							</div>	
							<div className="mySlides fade">
								<img src={Art5} />
							</div>	
							<div className="mySlides fade">
								<img src={Art2} />	
							</div>	
							<div className="mySlides fade">
								<img src={Art6} />
							</div>	
							<div className="mySlides fade">
								<img src={Art11} />
							</div>	
							<div className="mySlides fade">
								<img src={Art10} />
							</div>	
						</div>
					</div>	
					<div id="content">
						<h1>DIGITAL ART</h1>
						<div id="line"></div>
						<div id="textspace">
							<span>With a lot of focus on drawing and design fundamentals like form, perspective and composition paired with the extensive use of tools like ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR AND ADOBE AFTER-EFFECTS, I can create digital art and animations, edit images and create album/song covers. </span>
						</div>
					</div>	
				</div>
				</center>
			</div>
        );
    }
}

export default Digitalart;
