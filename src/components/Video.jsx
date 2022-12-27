import React from "react";
import ReactPlayer from "react-player";
const Video = () => {
  return (
    <div className="flex gap-3">
      <div className="w-3/4 ">
        <ReactPlayer
          className="rounded-md"
          height="30rem"
          width="100%"
          controls
          url="https://youtu.be/gLxbQb9bKWg"
          onReady={() => console.log("onReady callback")}
          onStart={() => console.log("onStart callback")}
          onPause={() => console.log("onPause callback")}
          onEnded={() => console.log("onEnded callback")}
          onError={() => console.log("onError callback")}
        />
      </div>
      <div className="gap-y-3">
        <div className="pb-6 rounded-md">
          {" "}
          <ReactPlayer
            className="video-yt"
            height="14rem"
            width="100%"
            controls
            url="https://youtu.be/FEhJzhDtoXg"
            onReady={() => console.log("onReady callback")}
            onStart={() => console.log("onStart callback")}
            onPause={() => console.log("onPause callback")}
            onEnded={() => console.log("onEnded callback")}
            onError={() => console.log("onError callback")}
          />
        </div>

        <ReactPlayer
          className="video-yt"
          height="14rem"
          width="100%"
          controls
          url="https://youtu.be/dipKOWh4jSM"
          onReady={() => console.log("onReady callback")}
          onStart={() => console.log("onStart callback")}
          onPause={() => console.log("onPause callback")}
          onEnded={() => console.log("onEnded callback")}
          onError={() => console.log("onError callback")}
        />
      </div>
    </div>
  );
};

export default Video;
