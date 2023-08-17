import './index.css';

import  logo  from "../../../assets/logomodern2.png"
import IonIcon from '@reacticons/ionicons';
import { useNavigate } from 'react-router-dom';

const ForgotView = () => {
    const navigate = useNavigate();
    return (
        <div style={{margin: '1rem'}}>
            <div className="login w100 displayFlex displayBlockResponsive" style={{flexDirection: "row"}}>
                <div  className="w50 " style={{marginRight: '2rem' ,overflow: "hideen", padding: '2rem'}}>
                    <IonIcon onClick={() => navigate('/login', {replace: true})} style={{cursor: 'pointer',margin: '0rem', fontSize: '2rem'}} name="chevron-back-outline"/>

                    <h3 className="m1" style={{fontWeight: '300' ,fontSize: '3rem'}}> Forgot Password</h3>
                    <input placeholder='email' type="email" className="input m1" />
                    <div className="right">
                        <button style={{marginRight: '0rem'}} className="btn btn-primary">Send Mail</button>
                    </div>
                </div>
                <div style={{height: "auto"}} className="gradientBox w50 center w100Responsive">
                    
                    
                    <img style={{filter: 'saturate(2)',marginTop: '5rem' }} width="350px" height="190px" alt="logo" src={logo}/>
                    <div className="w100">
                    </div>

                </div>
            </div>
            </div>
    )
}
export default ForgotView;