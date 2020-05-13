import React, { Component } from 'react';

class Phonemenu extends Component {   
	closephonemenu(){
        document.getElementById('phonemenu').style.height = '0vh';
        document.getElementById('menubars').style.display = 'inline-block';
    }
    openphonemenu(){
        document.getElementById('phonemenu').style.height = '100vh';
        document.getElementById('menubars').style.display = 'none';
    }


    render(){
        return(
        	<div id="pmc">
        	<i id="menubars" onClick = {this.openphonemenu} className="fa fa-bars"></i>
            <div id="phonemenu">
            	<i id="menuclose" onClick = {this.closephonemenu} className="fa fa-close"></i>

				<div id="m-cover">
				<center>	
				<a href="#about" onClick = {this.closephonemenu}><div className="menuopt">
					<p>ABOUT ME</p>
				</div></a>
				<a href="#dev" onClick = {this.closephonemenu}><div className="menuopt">
					<p>APP DEVELOPMENT</p>
				</div></a>
				<a href="#digitalart" onClick = {this.closephonemenu}><div className="menuopt">
					<p>DIGITAL ART</p>
				</div></a>
				<a href="#logosnposters" onClick = {this.closephonemenu}><div className="menuopt">
					<p>LOGOS AND POSTERS</p>
				</div></a>
				</center>
				</div>
			</div>
			</div>
        );
    }
}

export default Phonemenu;
