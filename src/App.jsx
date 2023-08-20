import postData from "./data/posts.json";
import NavBar from "./components/NavBar";
import PostData from "./data/posts.json"
import Post from "./components/Post";
import Locations from "./components/Locations";

function App() {
  let locations = {}
  PostData.forEach((post) => {
    if (Object.keys(locations).includes(post.location)){
      locations[post.location] += 1;
    } else {
      locations[post.location] = 1;
    }
  }) 

  return (
    <main>
      <NavBar />
      <span>Travel is the only thing you buy that makes you richer</span>
      {PostData.map((post) => {
        return <Post post={post} />
      })}
      <Locations locations={locations} />
    </main>
  );
}

export default App;
