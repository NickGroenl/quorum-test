import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/logomodern4.png';
import IonIcon from '@reacticons/ionicons';

const NavbarHub = () => {   
   return(
   <>
      <Sidebar>
      <Menu
         rootStyles={{padding: '1rem', height: '100vh'}}
         menuItemStyles={{
            button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            
               backgroundColor: 'transparent',
               color: '#211236',
            
            },
         }}
      >
         <img width='100%' height='100%' src={Logo}/>
         <MenuItem component={<Link to="/documentation" />}> Votations</MenuItem>
         <MenuItem component={<Link to="/calendar" />}> Configuration</MenuItem>
         <MenuItem component={<Link to="/e-commerce" />}> Create votation</MenuItem>
         <MenuItem component={<Link to="/e-commerce" />}> Help/Contact</MenuItem>
         <MenuItem component={<Link to="/e-commerce" />}> Configuration</MenuItem>

         
         <MenuItem component={<Link to="/e-commerce" />}><span style={{color: 'brown'}}>Log Out</span><IonIcon name="log-out-outline" style={{marginLeft: '.5rem' ,color: 'brown'}}/></MenuItem>

      </Menu>
      </Sidebar>
   </>);
}
export default NavbarHub;