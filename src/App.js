import React from "react";
import schedule from "./images/schedule.webp";
import stars from "./images/stars.webp";
import post from "./images/post.webp";
import platform from "./images/platform.webp";
import growth from "./images/growth.webp";
import followers from "./images/followers.webp";
import consistent from "./images/consistent.webp";
import content from "./images/content.webp";
import "./App.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";

function App() {
  return (
    <div className="App">
      <div className="App-create">
        <h2>
          Create and schedule content <span>quicker.</span>
        </h2>
        <img src={post} alt="Post content" />
      </div>
      <div className="App-stars">
        <h2>
          Social Media <span>10x </span>
          <span>Faster</span> with AI
        </h2>
        <img src={stars} alt="Stars" />
        <p>Over 4,000 5-star reviews</p>
      </div>
      <div className="App-schedule">
        <h2>Schedule to social media.</h2>
        <img src={schedule} alt="Schedule" />
        <p>
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </div>
      <div className="App-content">
        <h2>Write your content using AI.</h2>
        <img src={content} alt="Content" />
      </div>
      <div className="App-manage">
        <img src={platform} alt="Manage" />
        <h2>Manage multiple accounts and platforms/</h2>
      </div>
      <div className="App-consistent">
        <h2>Maintain a consistent posting schedule.</h2>
        <img src={consistent} alt="Consistent" />
      </div>
      <div className="App-growth">
        <h2>&gt;56%</h2>
        <p>faster audience growth</p>
        <img src={growth} alt="Growth" />
      </div>
      <div className="App-followers">
        <img src={followers} alt="Followers" />
        <h2>Grow followers with non-stop content.</h2>
      </div>
    </div>
  );
}

export default App;
