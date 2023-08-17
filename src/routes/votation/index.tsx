import { FunctionComponent, useState } from 'react';
import Navbar from '../../components/navbar';
import  { SwitchComponents } from '../../utils/general';
import ConfigureVotationDates from './configure.dates';
import SelectTypeVotation from './select.type';
import './create.votation.css';
import AddVotationOptions from './add.options';
import Footer from '../../components/footer/footer';
import NavbarHub from '../hub/components/navbar';

type OptionVotation  = { 
  title: string,
  element: JSX.Element,
  name: string
}
const listelements: Array<OptionVotation> = [
  {
    title: "1. Select the type of users you want to vote.",
    element: <SelectTypeVotation name="select-votation" />,
    name: "select-votation"
  },
  {
    title: "2. Configure your voting dates.",
    element: <ConfigureVotationDates name="configurate-votation" />,
    name: "configurate-votation"
  },
  {
    title: "3. Add the options to your votation. ",
    element: <AddVotationOptions name="add-votation-options" />,
    name: "add-votation-options"
  }
]
const CreateVotation = () => {
  const [oldComponent, setOldComponent] = useState<number>(-1)
  const [activeComponent, setActiveComponent] = useState<number>(0)
  return (
      <div className="displayFlex">
        <NavbarHub />
       
        <div className='container votation'>
          <h1>{listelements[activeComponent].title}</h1>
            <div className="create-votation">
                
            <SwitchComponents active={listelements[activeComponent].name}>
              {listelements.map((e) => e.element)}
            </SwitchComponents>
                
            </div>
            <div className="buttons-nav-sticky">
              {
                oldComponent !== -1 ? <button className="back-button" onClick={() => {
                  setOldComponent(oldComponent-1)
                  setActiveComponent(oldComponent);
                  
                  if(oldComponent === 0) setOldComponent(-1);
                  
                }}>Back</button> : ''
              }
              <button className="next-button" onClick={() => {
                if(activeComponent < listelements.length-1){
                  setOldComponent(activeComponent);
                  setActiveComponent(activeComponent+1);
                }
              }}>Next</button>
            </div>
        </div>
        </div>
  );
}
  
export default CreateVotation;