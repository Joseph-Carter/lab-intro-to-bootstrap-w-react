import postData from "./data/posts.json";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Locations from "./components/Locations";
import { useState } from "react";
import Search from "./components/Search";
import QuoteBanner from "./components/QuoteBanner";

function App() {
  console.log(postData);

  let locations = {};

  postData.forEach((post) => {
    if (Object.keys(locations).includes(post.location)) {
      locations[post.location] += 1;
    } else {
      locations[post.location] = 1;
    }
  });

  const [posts, setPosts] = useState(postData);
  const [query, setQuery] = useState("");

  return (
    <main>
      <div className="container text-center">
        <NavBar />
        <QuoteBanner />
        <Search setPosts={setPosts} postData={postData} setQuery={setQuery} />
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {posts.map((post) => {
            return <Post post={post} />;
          })}
        </div>
        <Locations
          locations={locations}
          setPosts={setPosts}
          postData={postData}
          setQuery={setQuery}
        />
      </div>
    </main>
  );
}

export default App;
