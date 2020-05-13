import React, { Component } from 'react';
import Logo from '../images/king.png';

class Header extends Component {       
    render(){
        return(
		<div>
            <div id="header">
				<div id="logo">
					<img src ={Logo} /> <p>SOREMI BOLU</p>
				</div>
			</div>
		</div>
        );
    }
}

export default Header;
