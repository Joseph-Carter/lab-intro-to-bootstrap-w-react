import postData from "./data/posts.json";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Locations from "./components/Locations";
import { useState } from "react";
import Search from "./components/Search";

function App() {
  console.log(postData)

  let locations = {}

  
  postData.forEach((post) => {
    if (Object.keys(locations).includes(post.location)){
      locations[post.location] += 1;
    } else {
      locations[post.location] = 1;
    }
  }) 
  
  const [posts, setPosts] = useState(postData)
  const [query, setQuery] = useState("")

  return (
    <main>
      <NavBar />
      <span>Travel is the only thing you buy that makes you richer</span>
      <Search setPosts={setPosts} postData={postData} setQuery={setQuery}/>
      {posts.map((post) => {
        return <Post post={post} />
      })}
      <Locations locations={locations} setPosts={setPosts} postData={postData} setQuery={setQuery}/>
    </main>
  );
}

export default App;
