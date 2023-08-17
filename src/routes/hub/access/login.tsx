import './index.css';

import  logo  from "../../../assets/logomodern2.png"
import IonIcon from '@reacticons/ionicons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks/store/store';
import { getStore } from '../../../hooks/store/user.slice';
import { loginUser } from '../../../hooks/api/api.user';
import { useDispatch } from 'react-redux';

const LoginView = () => {
    const [email, setEmail] = useState<any>('');
    const [password, setPassword] = useState<any>('');
    const [formMessage, setFormMessage] = useState<any>('');
    const navigate = useNavigate();
    const {user} = useAppSelector(getStore);
    const constructForm = async () =>{
        if(email !== '' && password !== ''){
            if(await loginUser(email, password, useDispatch)){
                navigate('/hub', {replace: true})
            } else setFormMessage('Enter a valid email and password');
        } else setFormMessage('Complete all fields');
    }

    useEffect(() => {
        if(user._id !== ''){
            navigate('/hub', {replace: true});
        }
    }, []);
    return (
        <div style={{margin: '1rem'}}>
            <div className="login w100 displayFlex displayBlockResponsive" style={{flexDirection: "row"}}>
                <div  className="w50 " style={{marginRight: '2rem' ,overflow: "hideen", padding: '2rem'}}>
                    <IonIcon onClick={() => navigate('/', {replace: true})} style={{cursor: 'pointer',margin: '0rem', fontSize: '2rem'}} name="chevron-back-outline"/>

                    <h3 className="m1" style={{fontWeight: '300' ,fontSize: '3rem'}}> Sign In</h3>
                    {formMessage !== '' ? <p className="w100" style={{color: 'brown', margin: '0px', marginBottom: '.2rem',marginLeft: '1rem'}}>{formMessage}</p> : <></> }
                    <input style={{border: formMessage !== '' ? '1px solid brown' : '1px solid black'}}  onChange={(e: any) => setEmail(e.target.value)} placeholder="email" type="email" className="input m1" />
                    <input style={{border: formMessage !== '' ? '1px solid brown' : '1px solid black'}}  onChange={(e: any) => setPassword(e.target.value)} placeholder="password" type="password" className="input m1" />
                    <span onClick={() => navigate('/forgot', {replace: true})} style={{cursor: 'pointer' ,marginLeft: '1rem', color: 'grey'}}>Forgot password?</span>
                    
                    <div className="right">
                        <button style={{marginRight: '0rem'}} onClick={() => constructForm()} className="btn btn-primary">Sign In</button>
                    </div>
                </div>
                <div style={{height: "auto"}} className="gradientBox w50 center w100Responsive">
                    
                    
                    <img style={{filter: 'saturate(2)',marginTop: '5rem' }} width="350px" height="190px" alt="logo" src={logo}/>
                    <div className="w100">
                    <button className="btn btn-white">Get an account</button>
                    </div>

                </div>
            </div>
            </div>
    )
}
export default LoginView;