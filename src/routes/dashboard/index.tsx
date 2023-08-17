import Navbar from "../../components/navbar";
import './index.css';
import * as Icon from 'react-feather';
import CardVotation from "../../components/card_votation";
import IonIcon from "@reacticons/ionicons";
import FooterApp from "../../components/footer/footer";
import { Link } from "react-router-dom";





const Dashboard = () => {
  

    return (
      <div className="">
        <Navbar/>
          <div style={{position: 'relative'}} className="presentation displayFlex center displayBlockResponsive">
            <div className="w50 w100Responsive displayNoneResponsive">
              <img className="modified"  style={{
                transform: 'translate(-50%)',
                maxWidth: '90vw'
              }}  src="https://static-content.regulaforensics.com/Software-products/Face%20SDK/FACE.jpg"/>
            
            </div>
            <div className="containerpurple left" style={{
              padding: '2rem',
              zIndex: '1'
            }}>
              <h1 style={{color: '#47a347', fontSize: '2rem'}}>Blockchain</h1>
              <h1 style={{color: 'white', fontSize: '4rem'}}>Vote with your phone from anywhere in the world</h1>
              <button className="btn btn-primary">Frequent Questions</button>
              <button className="btn btn-primary-full">Start now</button>


            </div>
            <img className="displayNoneResponsive" width='100%' max-width='100%' height='100%' style={{zIndex: '0',position: "absolute", margin: '0rem'}} src="https://cdn.discordapp.com/attachments/1128670410058252369/1128833332017369268/3.png"/>
            
          </div>
          <div >

            <img width='100%' src="https://cdn.discordapp.com/attachments/1128670410058252369/1128822422674624633/Politicos.png"/>
          </div>
          <div className="container ">
              <h1 className="m1 mt2" style={{color: 'black'}}>There are more than 36 million voters only in Argentina</h1>
              <p className="m1" style={{color: 'black'}}>Billions of people exercise their right to vote in various electoral processes. From presidential elections to local elections, voting is a powerful tool to express the will of the citizens and determine the political direction of nations. Active voter participation is essential to uphold democracy and ensure that everyone's voices are heard in the decision-making process.</p>
          </div> 
          <div style={{paddingTop: '3rem', paddingBottom: '3rem'}} className="presentation mt2 displayFlex displayBlockResponsive">
            <div className="container w50 w100Responsive ">
              <h1 className="m1" style={{color: 'white'}}>With an easy user interface</h1>
              <p className="m1 mt1" style={{color: 'white'}}>With an application that is responsible for the security and transparency of electoral processes. Adding a simple and intuitive user interface</p>
              <button className="btn btn-primary-full"><IonIcon name="logo-google-playstore"/> Get It on Google Play</button>
              <button className="btn btn-primary"><IonIcon name="logo-apple"/> Available on the App Store</button>
            </div>
              <video  playsInline autoPlay muted loop><source src="https://static-content.regulaforensics.com/FACE%20SDK%2013%20Feb.mp4"/> Your browser does not support the video tag. </video>
          </div>
          
          <div className="container mt2">
              
              <h1 className="m1 mt2" style={{color: 'black'}}>The KYC process is provided by Regula Forensics</h1>
              <p className="m1" style={{color: 'black'}}>The KYC (Know Your Customer) process is a set of measures and verifications that companies implement to confirm the identity of their customers. It is designed to prevent money laundering, terrorist financing, and other illicit activities while ensuring transparency and security in business relationships. During the KYC process, customers are required to provide information and documents that allow the company to reliably verify their identity before initiating any form of business relationship or transaction.




</p>
          </div>
          <div className="presentation" style={{paddingTop: '3rem'}}>
            <div className="container">
              <h1 className="fzResponsive" style={{color: 'white'}}> Technologies we use</h1>
              <div className="displayFlex between displayBlockResponsive">
                <div className="technologie">
                  <IonIcon name="document-outline"/>
                  <h2 >Document type identification</h2>
                  <p>Verify data from 12,000+ international documents using AI and ML.</p>
                </div>
                <div className="technologie">
                  <IonIcon name="person-circle-outline"/>
                  <h2 >Livennes Detection</h2>
                  <p>Examine the liveness of a person with AI and machine learning algorithms.</p>
                </div>
                <div className="technologie">
                  <IonIcon name="search-outline"/>
                  <h2 >Optical Character Recognition (OCR)</h2>
                  <p>Convert typed or printed text into digital data.</p>
                </div>
              </div>
              <div className="displayFlex between displayBlockResponsive">
                <div className="technologie">
                  <IonIcon name="construct-outline"/>
                  <h2 >Hardware-Assisted Authentication</h2>
                  <p>Scan documents anywhere with pocket-sized verification tools</p>
                </div>
                <div className="technologie">
                  <IonIcon name="hardware-chip-outline"/>
                  <h2 >RFID reading</h2>
                  <p>Verify documents equipped with Radio Frequency Identification (RFID) chips.</p>
                </div>
                <div className="technologie">
                  <IonIcon name="id-card"/>
                  <h2 >Face matching</h2>
                  <p>Make sure that a document’s presenter and its owner are the same person.</p>
                </div>
                
              </div>
            </div>
          </div>
          <div style={{margin: '0px', backgroundColor: '#eeeeee', paddingTop: '3rem', paddingBottom: '5rem'}}>
            <div style={{margin: '1rem'}}>
              <div className="login w100 displayFlex displayBlockResponsive" style={{flexDirection: "row"}}>
                <div style={{height: "auto"}} className="gradientBox w50 center w100Responsive">
                      
                      
                      <div style={{padding: '1rem'}} className="w100 mt2">
                        <h1 style={{color: '#47a347', fontSize: '2rem'}}>Try our product for free</h1>
                        

                        <button className="btn btn-white">Get a Demo!</button>
                      </div>

                  </div>
                  <div  className="w50 " style={{marginRight: '2rem' ,overflow: "hideen", padding: '2rem'}}>

                      <h3 className="m1" style={{fontWeight: '300' ,fontSize: '3rem'}}> Contact</h3>
                      <input placeholder='email' type="email" className="input m1" />
                      <div className="right">
                          <button style={{marginRight: '0rem'}} className="btn btn-primary">Send Mail</button>
                      </div>
                  </div>
                  
              </div>
            </div>
          </div> 

          
        <FooterApp/>
      </div>
    );
  }
  
export default Dashboard;
  