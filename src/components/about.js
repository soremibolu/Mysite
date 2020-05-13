import React, { Component } from 'react';
import Drone from '../images/drone.png';
import Typewriter from 'typewriter-effect';

class About extends Component {
    componentDidMount(){
        document.title = "Soremi Bolu";
    }

    render(){
        return(
            <div id="about">
                <center>
                	<div id="aboutcontent">
						<img id='drone-fig' src ={Drone} />
						<div id="content">
							<h1>ART AND CODES</h1>
							<div id="line"></div>
							<div id="textspace">
									<Typewriter 
									options={{
												autostart:true,
												loop:true,
											}}
										onInit={(typewriter) => {
											typewriter.typeString("I'm Soremi Bolu, a young creative and visionary who loves art in all its forms, loves tech and codes, loves to draw, design and develop in every sense those words encapsulate.<br/><br/>I'm a Web/Mobile app designer and developer, digital illustrator and graphics designer.")
											
											.pauseFor(1000)
											//.deleteAll()
											

											.start();
										}
										}
									/>
							</div>
						</div>
						<br/>
						<span id="contact">
							<h4>GET IN TOUCH</h4>
							<a href="mailto:soremibolu@gmail.com" target="_blank" title="Click to send mail"><i className="fa fa-envelope" id="env"></i></a>
							<a href="www.instagram.com/myartissacruise" target="_blank"><i className="fa fa-instagram" id="ig" title="Instagram"></i></a>
							<a href="www.github.com/soremibolu" target="_blank"><i className="fa fa-github" id="git" title="Github"></i></a>
						</span>
                	</div>
                </center>
            </div>
        );
           
    }

}

export default About;
