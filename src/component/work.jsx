import axios from 'axios'
import React, { useState } from 'react'
import { API_KEY } from './storage'
import Card from '../Weather_Card/Card';
import Home from '../multipage/Home';
import { Search } from 'lucide-react';
import Wellpaper from './navbar/wellpaper';



const Work = ({getstate}) => {
    const [icon, seticon] = useState([]);
    const [state, setState] = useState("");
    const [condition, setcondition] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    const call = ()=>{
        getstate(state);
    }
    const Responce = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${API_KEY}&units=metric`;
        const val = await axios.get(url);
        setWeatherData(val.data);
        
        // console.log(val.data.weather[0].icon);
        seticon(val.data.weather[0].icon);
        
        setState("");
        setcondition(!condition);
    }
    return (
        <div className='flex flex-col items-center justify-between gap-10 '>
            <div className="slide-from-left bg-gray-200/50  flex items-center justify-center py-8 md:py-12 rounded-xl  shadow-[inset_0_-10px_10px_rgba(255,255,255,0.15)] border-2 md:border-4 border-white">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    call();
                    Responce();
                }}>

                    <div className="flex slide-from-left flex-col md:flex-row gap-10 md:items-center md:justify-between  rounded-xl md:px-15 md:py-3 px-5">

                        <input
                            required
                            type="text"
                            value={state}
                            onChange={(e) => {
                                setState(e.target.value)
                            }}
                            placeholder='State Name'
                            className='outline-none border-2 w-auto rounded-xl border-gray-500 text-white font-bold bg-violet-400 md:w-xl px-2 py-2 text-2xl bg-gray-400 text-center '
                        />
                        <div className="flex items-center justify-center ">
                            <button
                            className='text-4xl px-5 py-1 rounded-xl bg-violet-400 boder-2 border-black active:scale-95'
                            ><Search size={52} className='text-white' /></button>
                        </div>
                    </div>
                </form>
            </div>
            <div
                className='flex slide-from-left items-center justify-center relative bg-gray-400/20 max-w-max lg:p-6 rounded-3xl border border-gray-200/30
            before:absolute before:top-0 before:left-0 before:w-8 before:h-8 before:border-t-4 before:border-l-4 before:border-gray-400 before:rounded-tl-2xl
            after:absolute after:bottom-0 after:right-0 after:w-8 after:h-8 after:border-b-4 after:border-r-4 after:border-gray-400 after:rounded-br-2xl  '>
                {condition ? (
                    <div className="relative">
                        <div className="absolute w-full h-3 inset-0 overflow-hidden -z-10 pointer-events-none"><Wellpaper data={weatherData}/></div>
                        <div className="relative ">
                            <Card
                                name={state}
                                valu={weatherData}
                                ico={icon}
                            />
                        </div>
                    </div>
                ) : (
                    <div className=" text-gray-800">
                        Weather Data.....
                    </div>
                )}
            </div>
        </div>

    )
}

export default Work