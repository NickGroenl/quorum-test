import IonIcon from '@reacticons/ionicons';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logomodern3.png';
import './index.css';
const Navbar = () => {
  const navigate = useNavigate();
    return (
      <div className="navbar">
        <div className="navbar-brand">
          <Link to={'/'} > <img width="160px" height="80px" src={Logo} alt="quorumlogo"/></Link>
          
        </div>
        <div className='navbar-items'>
            <button className="navbar-item" onClick={() => navigate('/login', {replace: true})}>
              Hub <IonIcon name="open-outline" />

            </button>
        </div>
        
        
      </div>
    );
  }
  
export default Navbar;
  