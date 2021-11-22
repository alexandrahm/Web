import React, {useState} from "react";
import { useForm } from 'react-hook-form'
import SendIcon from '@mui/icons-material/Send';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
const Comment = () => {
    const {register, errors, handleSubmit} = useForm();
    const [send,setSend] = useState(<SendOutlinedIcon fontSize="large"/>)

    const onSubmitHandler = (data, e) =>{
        console.log(data);
        e.target.reset();
    }
    
    const onMouseEnterLikeHandler = () => {
        setSend(<SendIcon fontSize="large"/>)
    } 

    const onMouseLeaveLikeHandler = () => {
        setSend(<SendOutlinedIcon  fontSize="large"/>)
    }  

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)} className="w-full h-16 flex flex-row justify-between items-center ">
            <input name="comment" className="w-4/5 h-8 ml-6 px-4 rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Tengo que decir ..."  {...register("exampleRequired")}/>
            <button type="submit" onMouseEnter={onMouseEnterLikeHandler} onMouseLeave={onMouseLeaveLikeHandler} className="mr-6 " id="send">{send}</button>
        </form>
    );
};

export default Comment;
