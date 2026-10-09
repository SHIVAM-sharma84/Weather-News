import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Wind } from 'lucide-react';
import { Cloudy, Droplets } from 'lucide-react';
import Wellpaper from '../component/navbar/wellpaper';

const Card = (props) => {



  return (
    <div className="w-screen relative  max-w-md rounded-3xl border border-white/20 bg-white/10 p-4 text-violet-600 shadow-2xl backdrop-blur-xl">

      <div className="relative">
        {/* <div className="absolute w-full h-3 inset-0 overflow-hidden -z-10 pointer-events-none"><Wellpaper/></div> */}
        {/* Header */}
        <div className="relative flex slide-from-left items-center justify-between rounded-2xl border border-white/20 bg-white/20 px-4 py-2 shadow-lg">

          <div className="flex text-violet-600 slide-from-top items-center gap-3">
            <img
              src={`https://openweathermap.org/img/wn/${props.ico}@2x.png`}
              alt="weather"
              className="h-14 w-14"
            />

            <div className="text-2xl text-violet-600  font-semibold tracking-wide">
              {props.valu.name}
            </div>
          </div>

          <div className="text-4xl text-violet-600 font-bold">
            {Math.round(props.valu.main.temp)}°
          </div>

        </div>

        {/* Temperature Info */}
        <div className="mt-6 slide-from-right flex justify-between rounded-2xl bg-white/10 p-4">

          <div className="flex flex-col gap-2">
            <span className="text-sm text-violet-400 text-violet-400">
              Temperature
            </span>

            <span className="text-xl text-violet-600 font-semibold">
              {props.valu.main.temp}°C
            </span>
          </div>

          <div className="flex flex-col gap-2 text-right">
            <span className="text-sm text-violet-400">
              Feels Like
            </span>

            <span className="text-xl  text-violet-600 font-semibold">
              {props.valu.main.feels_like}°C
            </span>
          </div>

        </div>

        {/* Weather Details */}
        <div className="mt-4 slide-from-left grid grid-cols-2 gap-3">

          {/* Wind */}
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4">

            <div className="flex items-center gap-2 text-violet-400">
              <Wind size={28} strokeWidth={2} />

              <span className="text-sm">
                Wind
              </span>
            </div>

            <p className="mt-2 text-violet-600 text-xl font-semibold">
              {Math.round(props.valu.wind.speed)}
              <span className="ml-1 text-sm text-violet-400">
                km/h
              </span>
            </p>

          </div>

          {/* Humidity */}
          <div className="rounded-2xl border slide-from-right border-white/10 bg-white/10 p-4">
            <div className="flex items-center text-violet-400">
              <Droplets size={28} strokeWidth={2.25} absoluteStrokeWidth />
              <div className="text-sm text-violet-400">
                Humidity
              </div>
            </div>
            <p className="mt-2 text-xl text-violet-600 font-semibold">
              {props.valu.main.humidity}%
            </p>
          </div>
          {/* weather Condition */}
          <div className="rounded-2xl slide-from-left border border-white/10 bg-white/10 p-4">

            <div className="flex items-center gap-2 text-violet-400">
              <Cloudy size={32} absoluteStrokeWidth />

              <span className="text-sm">
                Weather Condition
              </span>
            </div>

            <p className="mt-2 text-xl text-violet-600 font-semibold">
              {props.valu.weather[0].description}

            </p>

          </div>
          {/* Visibility */}
          <div className="rounded-2xl border slide-from-bottom border-white/10 bg-white/10 p-4">
            <div className="flex items-center text-violet-400">
              <Droplets size={28} strokeWidth={2.25} absoluteStrokeWidth />
              <div className="text-sm text-violet-400">
                Visibility
              </div>
            </div>
            <p className="mt-2 text-xl text-violet-600 font-semibold">
              {(props.valu.visibility) / 1000} km
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card
