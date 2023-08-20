import postData from "./data/posts.json";
import NavBar from "./components/NavBar";
import PostData from "./data/posts.json"
import Post from "./components/Post";

function App() {
  console.log(postData);
  return (
    <main>
      <NavBar />
      <span>Travel is the only thing you buy that makes you richer</span>
      {PostData.map((post) => {
        return <Post post={post} />
      })}
    </main>
  );
}

export default App;
