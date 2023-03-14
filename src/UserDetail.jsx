import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
const UserDetail =()=>{
    const {id} = useParams();
    const [post, setPost] = useState([])
    useEffect( ()=>{
      fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(response => response.json())
        .then(data => setPost(data));
    },[]
    )
    return(
        
        <div className=" container mx-auto my-6">
            <Link to="/" className="text-cyan-500">Home</Link>
            <div className="p-5 border rounded-xl shadow-xl m-6">
            <img src={post.url} alt="" className=" rounded-lg mx-auto" />
            <h1 className="text-4xl m-4">User: {id}</h1>
            <h2 className="text-3xl m-2">{post.title}</h2>
            </div>
        </div>
    )
}
export default UserDetail