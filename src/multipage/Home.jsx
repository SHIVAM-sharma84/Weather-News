import React, { useEffect, useState } from 'react'
import Work from '../component/work'
import { API_KEY } from '../component/storage';
import axios from 'axios';
// import Wellpaper from '../component/navbar/wellpaper';
import PexelsImage from '../component/navbar/wellpaper_image';
const Home = () => {
  const [state, setstate] = useState("");
   const [weatherData, setWeatherData] = useState(null); // Added state for data

  const call = async () => {
    if (!state) return; // Don't fetch if state is empty
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${API_KEY}&units=metric`;
      const val = await axios.get(url);
      setWeatherData(val.data.weather[0].main); // Save the data
      // console.log(val.data.weather[0]);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  }

  useEffect(() => {
    call();
  }, [state])
  const handstate = (name)=>{
    console.log(name);
    setstate(name);
    
    
  }

  return (
    <div className="">
      <div className="absolute w-full h-3 inset-0 overflow-hidden -z-10 pointer-events-none"><PexelsImage data={weatherData}/></div>
    <div className="flex flex-col gap-5 ">

      <div className="text-4xl text-center  font-bold text-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
        <span className='mb-8 text-center
        text-4xl font-bold
        md:text-5xl
        bg-gradient-to-r
      from-purple-500
      via-pink-500
      to-red-500
        bg-clip-text
        text-transparentr '>Check Weather</span>
      </div>
      <div >
        {/*  */}
        <Work getstate={handstate} />
      </div>
    </div>
  </div>
  )
}

export default Home
