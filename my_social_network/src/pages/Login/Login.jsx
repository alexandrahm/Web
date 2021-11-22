import React, {useState, useEffect} from "react";
import Form from "./Form/Form.jsx";

//Services 
import { imageServices } from "../../Services/Image/Image.service";


const Login = () => {
    //States
    const [imgUrl, setImgUrl] = useState("");

    useEffect(() => {
        const fetchPokemons =  () => {
             const filters = {width: 1920, height:1080};
            setImgUrl(imageServices.getImageRandom(filters))
        };
        fetchPokemons();
        
    }, []);
    return (
        <div className="w-screen h-screen bg-no-repeat bg-cover bg-opacity-75 bg-center" style={{backgroundImage: `url(${imgUrl})`}}>
            <div className="w-screen h-screen flex flex-col justify-center items-center  bg-black bg-opacity-25 ">
                <Form />
            </div>
        </div>
    );
};

export default Login;