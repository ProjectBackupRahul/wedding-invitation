import React, { useEffect, useState } from "react";

const BackgroundMusic = () => {
    const [audio, SetAudio] = useState("");

    const Playit = () => {
      audio.play();
    };
    const Stopit = () => {
      
      audio.pause();
    };
    useEffect(() => {
      SetAudio(new Audio("/../public/bm.mp3"));
    }, []);

  return (
    <div>
     
    </div>
  );
};

export default BackgroundMusic;