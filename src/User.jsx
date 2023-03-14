import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";
const User =()=> {
  const navigate = useNavigate();
    const [posts, setPost] = useState([])
    useEffect( ()=>{
      fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=15')
        .then(response => response.json())
        .then(data => setPost(data));
    },[]
    )
    return (
     <>
      <div className="container mx-auto">
      <h1 className=" text-3xl m-6 text-center">User Data</h1>
      <div className="grid grid-cols-4 gap-5">
        {posts.map((post)=>{
            return (
            <div key={post.id} className=" p-5 border rounded-xl scale-100 hover:scale-110 ease-in duration-500" onClick={()=>navigate(`/detail/${post.id}`)}>
              <img src={post.url} alt="" className=" rounded-lg" />
              <h2>{post.id}. {post.title}</h2>
              <Link to={`/detail/${post.id}`} className=" text-cyan-500">See More...</Link>
            </div>
        )
        })}
      </div>
      </div>
      
     </>
    )
 }
 export default User