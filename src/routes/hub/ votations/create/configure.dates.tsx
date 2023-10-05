import { FunctionComponent, SetStateAction,  useRef,  useState } from "react";
import { set, useForm } from "react-hook-form";
import { SwitchComponentChildrenType } from "../../../../utils/general";
import { locations } from "../../../../models/votation.model";




const ConfigureVotationDates: FunctionComponent<SwitchComponentChildrenType> = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    
    const selectOption = useRef(null)
    console.log(selectOption)
    
    const [province, SetProvince] = useState<number>(0);{}
   
    
   const result = locations.map( pickup => {
       const match = locations.find(addr => addr.id === pickup.id);
       return {
           
           ciudades: match?.ciudades,
           id : match?.id,
           name : match?.nombre
           
       }
       
   })
   

    const [municipios,setMunicipios] = useState('');
   const [type, setType] = useState(0);
   const resultaditos = locations.find( ctr => {
     
       if (ctr.id >= province) {
           return ctr.ciudades
       }
   })
 
     return (

     <form className="w100" onSubmit={handleSubmit((data) => console.log(data))} ref={selectOption}>

                <div className="w100">
                    <p className="">Image banner</p>
                    <input className=" w100" {...register('image', { required: true })} type="file" style={{width: '90%'}} />
                        
                </div>
                <div className="w100">
                        <p className="">Type</p>
                         

                         <select  >
                           
                                <option value="">Provincial</option>
                                <option value="">Nacional</option>
                                <option value="">Municipal</option>

                         </select>

                         
                    </div>
                    
                <div className="displayFlex between" style={{width: '100%'}}>
                    
                    

                    
                    <div className="w100">
                        <p className="">Provincia</p>
                        <select className="w100" value={province}   onChange={(e:any) => SetProvince(e.target!.value)}    >
                           
                            {locations.map((e:any,index) => {
                           return <option  label={e.nombre} value={e.id} key={index}></option>})}
                        </select>
                        
                    </div>
                    <div className="w100" >
                        <p className="">Municipios</p>
                         
                            
                         <select value={municipios} className="options" onChange={(e) => setMunicipios(e.target.value)}>
                              
                             {
                                resultaditos?.ciudades.map((ciudad) => (
                                    <option  ref={selectOption}  value={ciudad.id}>{ciudad.nombre}</option>
                                ))
                             }
                         </select>
                  
                    </div>


                    
                   
                </div>
                
                <p className="">Date start</p>
                <input className="" {...register('name', { required: true })} type="datetime-local" style={{width: '90%'}}/>
                <p className="">Date end</p>
                <input className="" {...register('name', { required: true })} type="datetime-local" style={{width: '90%'}} />
                {errors.lastName && <p>Last name is required.</p>}
                {errors.age && <p>Please enter number for age.</p>}
                
            </form>
       
    );
}
export default ConfigureVotationDates;