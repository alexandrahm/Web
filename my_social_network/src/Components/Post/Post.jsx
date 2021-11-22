import React, {useState} from "react";
import { useForm } from 'react-hook-form'
//import { MdFavoriteBorder, MdFavorite, MdOutlineSend, MdSend} from "react-icons/md";
//import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//import { FavoriteIcon, FavoriteBorderIcon,ChatIcon ,ChatOutlinedIcon   } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Comment from "./Comment/Comment";

//import { RiChat4Line, RiChat4Fill } from "react-icons/ri";
const Post = () => {
  
    const [iconLike, setIconLike] = useState(<FavoriteBorderIcon className="stroke-current text-gray-500 hover:text-white" fontSize="large"/>)
    const [iconComment, setIconComment] = useState(<ChatOutlinedIcon fontSize="large"/>)
    const [formComment, setFormComment] = useState(<div></div>)

    const {register, errors, handleSubmit} = useForm();

    const onSubmitHandler = (data, e) =>{
        console.log(data);
        e.target.reset();
    }
    const onClickLikeHandler = () =>{
        console.log(iconLike)
        iconLike.type.type.render.displayName === "FavoriteIcon"? setIconLike(<FavoriteBorderIcon fontSize="large"/>):setIconLike(<FavoriteIcon fontSize="large"/>)
    }

    const onClickCommentHandler = () =>{
        if(iconComment.type.type.render.displayName === "ChatIcon"){       
            setIconComment(<ChatOutlinedIcon fontSize="large"/>)
            setFormComment(<div></div>)
        }else{
            setIconComment(<ChatIcon fontSize="large"/>)
            setFormComment(<Comment/>)
        }
    }
    



    return (
            <div className="w-full bg-green-400  rounded-lg flex flex-col mt-3">
                <div className="w-full h-12  flex justify-center items-center hover:underline">
                    Titulo
                </div>
                <div className="w-full h-96"><img className="w-full h-full object-contain" src="https://picsum.photos/500/500"/></div>
                <div className="w-full h-20 overflow-auto p-2 pt-2  bg-blue-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci expedita vitae vero et praesentium aliquam iusto consequuntur excepturi voluptatem reprehenderit quae mollitia incidunt voluptas placeat est, maiores aspernatur tenetur eos dolores suscipit voluptate sed, consequatur doloremque sunt.</div>
                <div className="w-full h-16 flex flex-row justify-between items-center">
                    <button  onClick={onClickLikeHandler} className="ml-6">{iconLike}</button>
                    <button onClick={onClickCommentHandler} className="mr-6">{iconComment}</button>
                    
                </div>
                {formComment}
            </div>
    );
};

export default Post;