import React, {useState} from "react";
import { useForm } from 'react-hook-form'
import LoopIcon from '@mui/icons-material/Loop';
const PartForm = () => {
    const {register, errors, handleSubmit} = useForm();
    const [img,setImg] = useState("")
    const [loading, setLoading] = useState(<div></div>)
    const [animationClass, setAnimationClass] = useState("animate-bounce");

    const onSubmitHandler = (data, e) =>{
        console.log(data);
        e.target.reset();
    }
    
    const onChangeHandler = async  (e) =>{
        setImg("")
        setLoading(<LoopIcon className ="animate-spin"/>);
        try {
            let a = await fetch(e.target.value)
            console.log(a)
            if(a.redirected === true)
            {
                console.log("hi helo")
                //console.log(e.target.value);
                setImg(e.target.value)
                setLoading(<div></div>)
            }
        } catch (error) {
            console.error(error);
        }   
        
    }

    const onMouseEnterLikeHandler = () => {
        setAnimationClass("")
    } 

    const onMouseLeaveLikeHandler = () => {
        setAnimationClass("animate-bounce")
    }  
    return (
        <div className="w-full h-full flex flex-col gap-y-4 justify-around items-center">
        <input name="url" className="w-4/5 h-8  px-4 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Pega una URL"  {...register("exampleRequired",{onChange: (e) =>  onChangeHandler(e)})}/>
        {loading}
        <img src={img}/>
        <textarea className="w-4/5 resize-none border rounded-md p-1 " placeholder="Descripcion"></textarea>
        <button type="submit" onMouseEnter={onMouseEnterLikeHandler} onMouseLeave={onMouseLeaveLikeHandler} className={`self-end bg-purple-700 p-4 mr-16 mb-3 mt-1  rounded-lg ${animationClass}`  } id="send">Publicar</button>
        </div>
    );
};

export default PartForm;