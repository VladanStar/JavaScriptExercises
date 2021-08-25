import { useState, useEffect } from "react";
import BlogList from "../BlogList/BlogList";

const Home = () => {

  const handleDelete =(id)=>{
        const newBlogs = blogs.filter(blog=>blog.id !== id);
        setBlogs(newBlogs)

  }

  useEffect(()=>{
    console.log('use effect run');
    console.log(blogs);
  },[]);
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  const[name, setName] = useState('mario')

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete ={handleDelete} />
      
      <button onClick={()=>setName('luigi')}>SetName</button>
      <p>{name}</p>
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's blogs"
      /> */}
    </div>
  );
};

export default Home;
