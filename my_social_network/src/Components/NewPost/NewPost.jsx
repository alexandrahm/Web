import React, {useState} from "react";
import { useForm } from 'react-hook-form'
import PartForm from "./PartForm/PartForm";

const NewPost = () => {

    const [formComment, setFormComment] = useState(<div></div>)
    const {register, errors, handleSubmit} = useForm();

    const onSubmitHandler = (data, e) =>{
        console.log(data);
        e.target.reset();
    }



    const onFocusHandler = () =>{
        
        setFormComment(<PartForm/>)
    }
   
    const onBlurHandler = () =>{
        
        setTimeout(() => {setFormComment(<div></div>)}, 7000);
    }

    return (
        <div onMouseLeave={onBlurHandler} onMouseEnter={onFocusHandler} className="w-full  bg-blue-400 rounded-lg mt-20  ">
            
                <form onSubmit={handleSubmit(onSubmitHandler)} className="w-full h-full flex flex-col gap-y-7 items-center ">
                <input name="comment"  onFocus={onFocusHandler} className="w-4/5 h-12 mt-6 px-4 text-3xl rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Titulo" {...register("exampleRequired2")}  />
               
                
                {formComment}
                </form>  
        </div>
    );
};

export default NewPost;