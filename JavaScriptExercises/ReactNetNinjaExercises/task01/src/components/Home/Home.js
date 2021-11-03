import { useState, useEffect } from "react";
import BlogList from "../BlogList/BlogList";
import useFetch from "../UseFetch/UseFetch";

const Home = () => {
const {error, isPedding, data:blogs} = useFetch("http://localhost:8000/blogs");
  
  
  // const[name, setName] = useState('mario')

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPedding && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs}  />}
      
      
    </div>
  );
};

export default Home;
