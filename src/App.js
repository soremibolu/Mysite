import React, { Component } from 'react';
import './plugins/font-awesome/css/font-awesome.css';
import Favicon from 'react-favicon';
import Faviconimg from './images/king.png';
import Preloader from './components/preloader.js';
import Header from './components/header.js';
import Sidemenu from './components/sidemenu.js';
import Digitalart from './components/digitalart.js';
import Logos from './components/logosandposters.js';
import About from './components/about.js';
import Dev from './components/dev.js';
import Phonemenu from './components/phonemenu.js';
import './styles/style.scss';


class App extends Component {
    componentDidMount(){
        document.title = "Soremi Bolu";
    }

    render(){
        return(
            <div id="container">
                <div id="main">
                    <Favicon url={Faviconimg} />
                    <Preloader />                  
                    <Phonemenu />
                    <Header />
                    <Sidemenu />  
                    <About />
                    <Dev />
                    <Digitalart />
                    <Logos />

                </div> 
            </div>
        );
           
    }

}

export default App;
