import React from "react";
import Post from "../../Components/Post/Post"
import NewPost from "../../Components/NewPost/NewPost"
import Navbar from "./Navbar/Navbar";

const Admin = () => {

    return (
        <div className=" h-screen bg-repeat bg-purple-500  grid grid-cols-6">
            <Navbar/>
            <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 xl:col-start-3 xl:col-span-2">
                <NewPost /> 
                <Post />
        

          

            </div>
        </div>
    );
};

export default Admin;