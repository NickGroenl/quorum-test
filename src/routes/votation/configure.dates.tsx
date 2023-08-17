import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { SwitchComponentChildrenType } from "../../utils/general";


const ConfigureVotationDates: FunctionComponent<SwitchComponentChildrenType> = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
      
    return (
        <div className="configurate-dates-votation"> 
            <form onSubmit={handleSubmit((data) => console.log(data))}>


                <p className="m1">Image banner</p>
                <input className="m1" {...register('image', { required: true })} type="file" />
                <p className="m1">Votation title</p>
                <input className="m1" {...register('name', { required: true })} type="text" />
                <p className="m1">Date start</p>
                <input className="m1" {...register('name', { required: true })} type="datetime-local" />
                <p className="m1">Date end</p>
                <input className="m1" {...register('name', { required: true })} type="datetime-local" />
                {errors.lastName && <p>Last name is required.</p>}
                {errors.age && <p>Please enter number for age.</p>}
                
            </form>
        </div>
       
    );
}
export default ConfigureVotationDates;