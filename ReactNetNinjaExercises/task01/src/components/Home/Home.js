import { useState, useEffect } from "react";
import BlogList from "../BlogList/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(()=>{
    fetch('http://localhost:8000/blogs')
    .then(res=>{
     return res.json()
    })
    .then(data=>{
      setBlogs(data)
    })
  },[]);


  // const[name, setName] = useState('mario')

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs}  />}
      
      
    </div>
  );
};

export default Home;
