import React, { Component } from 'react';

class Sidemenu extends Component {   
	open1(){
		document.getElementById('effect1').style.borderColor = '100%';
	}

    render(){
        return(
            <div id="sidemenu">
            	<a href="#about" onClick = {this.open1} >
				<div className="options" id="opt">
					<p>ABOUT ME</p>
					<hr id="effect1"/>
				</div>
				</a>
            	<a href="#dev">
				<div className="options" id="opt">
					<p>APP DEVELOPMENT</p>
					<hr id="effect2"/>
				</div>
				</a>
				<a href="#digitalart">
				<div className="options" id="opt">
					<p>DIGITAL ART</p>
					<hr id="effect3"/>
				</div>
				</a>
				<a href="#logosnposters">
				<div className="options" id="opt">
					<p>LOGOS AND POSTERS</p>
					<hr id="effect4"/>
				</div>
				</a>
				
			</div>
        );
    }
}

export default Sidemenu;
