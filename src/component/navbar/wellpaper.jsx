import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { getWeather } from '../work';



const Wellpaper = (props) => {
    console.log(props.data.weather[0].main);
  let temp = (props.data.weather[0].main).toLowerCase();
  // console.log(temp);
  
    
    const [video, setVideo] = useState(null);
        // console.log(getWeather.val);
        
      useEffect(() => {

        axios
          .get("https://api.pexels.com/videos/search", {
            headers: {
              Authorization: import.meta.env.VITE_PEXELS_API_KEY,
            },
            params: {
              query: temp,
              per_page: 1,
            },
          })
          .then((res) => {
            setVideo(res.data.videos[0]);
            // console.log(res);
            
          })
          .catch(console.error);
      }, []);


  return (
    <div className="relative w-screen h-screen overflow-hidden">
  {/* Background Video */}
  {video && (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed top-0 left-0 w-full rounded-2xl h-full object-cover overflow-hidden"
    >
      <source
        src={video.video_files[1].link}
        type="video/mp4"    
      />
    </video>
  )}
</div>
  )
}

export default Wellpaper