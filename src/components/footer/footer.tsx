import React from "react";
import  './footer.css';
import  logo  from "../../assets/logomodern2.png"
import IonIcon from "@reacticons/ionicons";
import { Link } from "react-router-dom";
const FooterApp = () => {
    return (
        <div className="footer">
        <div className="displayFlex between displayBlockResponsive">
            
            <div>
                <img style={{filter: 'saturate(2)'}} width="350px" height="190px" alt="logo" src={logo}/>
                
            </div>
            <div className="footer-items">
                <div className="section">
                    <h1>UTIL LINKS</h1>
                    <p>Our team</p>
                    <p>Work with us</p>
                </div>
                <div className="section">
                    <h1>CONTACT</h1>
                    <p>canitrotbartolome@gmail.com</p>
                    <p>+39 333584593</p>
                </div>
                <div className="section">
                    <h1>RESOURCES</h1>
                    <Link to="/privacy-rules"><p>Privacy Policy</p></Link>
                    <p>Community Rules</p>
                </div>

                

                
            </div>
            
            
                
        </div>
        
        </div>
    )
}
export default FooterApp;