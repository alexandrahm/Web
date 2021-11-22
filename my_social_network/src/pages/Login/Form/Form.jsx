import React from "react";
import { useForm } from 'react-hook-form'
import logo from "../../../assets/img/logo.png"

const Form = () => {
    const {register, errors, handleSubmit} = useForm();

    const onSubmitHandler = (data, e) =>{
        console.log(data);
        e.target.reset();
    }

    return (
        <div className="w-1/3 h-3/5 bg-transparent   relative flex flex-col justify-center items-center">
            <img className="w-3/12" src={logo}/>
            {/*<h2 className="text-7xl">Red Social</h2> */}
            <form onSubmit={handleSubmit(onSubmitHandler)} className="w-4/5 h-3/5 flex flex-col justify-around items-center">
                <input name="user" className="w-3/4 h-12 px-4 rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="User" {...register("exampleRequired")} />
                <input name="password" type="password" className="w-3/4 h-12 px-4 rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Password" {...register("exampleRequiredP")} />
                <button type="submit" className="w-3/4 h-12 px-4 py-1 text-3xl text-purple-600 font-semibold rounded-full border border-purple-600 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Ingresar</button>
            </form>
        </div>
    );
};

export default Form;