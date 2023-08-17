import IonIcon from "@reacticons/ionicons";
import { FunctionComponent, useState } from "react";
import { useForm } from "react-hook-form";
import { SwitchComponentChildrenType } from "../../utils/general";


const AddVotationOptions: FunctionComponent<SwitchComponentChildrenType> = () => {
    const [options, setOptions] = useState<Array<String>>([]);
    const [value, setInputValue] = useState<String>('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
      
    return (
        <div className="add-options-votation"> 
            <div className="displayFlex m1 add">
                <input className="m1 widthFull" {...register('name', { required: true })} type="text" onChange={(e) => setInputValue(e.target.value)}/>
                <div className="add-icon m1" onClick={() => {
                    if(value.length > 0) setOptions([...options, value]);
                }}>
                    <IonIcon name={"add"} />
                </div>
            </div>
            {options.map((e) => <div className="displayFlex optionSelected m1">
                <span className="widthFull m1">{e}</span>
                <div className="remove-icon m1" onClick={() => {
                    let asvalue: Array<String> = options;
                    asvalue.splice(asvalue.indexOf(e), 1);
                    setOptions([...asvalue]);
                }}>
                    <IonIcon name="remove-circle-outline"/>
                </div>
            </div>)}
            
            
            
        </div>
       
    );
}
export default AddVotationOptions;