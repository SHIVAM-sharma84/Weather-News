import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import Newscard from '../news/newcard'


const News = () => {
  const [news, setNews] = useState([]);
  const [index, setIndex] = useState(1)
  const [lan, setLan] = useState("hi");

  

  const API_KEY = 'ureBOnDybQnA_dQcZu8qXc5csAg-Z1vInvH0kK-E5w6pKHGY';    
 

    const responce = async ()=>{
    const val = await axios.get(
        `https://api.currentsapi.services/v1/latest-news?apiKey=${API_KEY}&language=${lan}&page_number=${index}`
      );
      
      setNews(val.data.news);
      // console.log(val.data.news);
      // console.log(val.data.data[0].category);
    }
  const previousPage = () => {
    if (index > 1) {
      setIndex(index - 1);
    }
  };


    const pre = ()=>{
    if (index<0){
      
    }
    else{
      setIndex(index-1);
    }
  }

  useEffect(function(){
    responce()
  },[index,lan])

  return (
    <div className="min-h-full   text-white px-4 md:px-10 py-8 ">

      <div className="mt-5  mb-10">
  <div className="container ">
    <label className="switch ">

      <input
        className="togglesw"
        type="checkbox"
        checked={lan === "hi"}
        onChange={(e) => {
          setLan(e.target.checked ? "hi" : "en");
        }}
      />

      <div className="indicator left flex items-center justify-center">
        <span className="mr-2 text-lg md:text-lg font-serif">
          English
        </span>
      </div>

      <div className="indicator right flex items-center justify-center">
        <span className="text-black text-=lg md:text-lg font-serif">
          Hindi
        </span>
      </div>

      <div className="button"></div>

    </label>
  </div>
</div>
  
      {/* Header */}
      <div className="mb-8 bg-gray-200/10 px-5 rounded-2xl py-2">
        <p className="text-gray-400 text-xl md:text-4xl font-serif uppercase tracking-widest">
          Daily News
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-2">
          News <span className="text-amber-300">Board</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mt-3">
          Stay updated with the latest news from around the world.
        </p>
      </div>



      {news.length > 0 ? (
        <div className="grid grid-1 sm:grid-2 lg:grid-cols-3 gap-6">
          {news.map((article, idx) => (
            <Newscard key={idx} elem={article} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[60vh]">
          <h2 className="text-gray-400 text-3xl">
            Loading News...
          </h2>
        </div>
      )}
        <div 
        className="flex  items-center justify-center gap-8 mt-12 px-5 pb-6">
          <div 
          style={{ visibility: index<2 ? 'hidden': 'visible'}}
          className="px-8 py-3 text-2xl rounded-2xl font-semibold bg-amber-400 boder-2 border-amber-600 active:scale-95 hover:bg-amber-600">
            <button 
             
            className='cursor-pointer'
            onClick={()=>{
                previousPage();
              }}
            disabled={index==0}
            >Pre</button>
          </div>
          <div className="text-white text-lg md:text-2xl">
            Page - {index}
          </div>
          <div className="px-8 py-3 text-lg md:text-2xl rounded-2xl font-semibold bg-amber-400 boder-2 border-amber-600 active:scale-95 hover:bg-amber-600">
            <button
            className='cursor-pointer'
                onClick={() => setIndex(index + 1)}
             >Next</button>
          </div>
        </div>
    </div>
  )
}

export default News




