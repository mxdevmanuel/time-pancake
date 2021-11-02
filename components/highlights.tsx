import { Fragment } from "react";
import { Weather } from "@datatypes/weather";
import PointsOfCompass from "@components/pointsofcompass";

interface HighlightsProps {
  weather: Weather;
}
export default function Highlights({ weather }: HighlightsProps) {
  return (
    <Fragment>
      <div className="w-full py-5 2xl:mt-14">
        <span className="text-left text-white text-2xl">
          Today's highlights
        </span>
      </div>
      <div className="grid grid-cols-2 gap-12 w-full">
        <div className="bg-navy flex flex-col justify-evenly px-16 py-3">
          <span className="text-sm text-white text-center my-1">
            Wind Status
          </span>
          <div className="mx-auto">
            <span className="text-5xl text-white text-center font-bold my-1">
              {Math.round(weather.current_weather.wind_speed)}
            </span>
            <span className="text-3xl text-gray-300">mph</span>
          </div>
          <div className="flex flex-row place-content-center align-middle mt-5">
            <span className="bg-gray-500 rounded-full p-2 mx-2">
              <PointsOfCompass
                direction={weather.current_weather.wind_direction_compass}
              />
            </span>
            <span className="text-md text-white text-center my-auto">
              {weather.current_weather.wind_direction_compass}
            </span>
          </div>
        </div>
        <div className="bg-navy flex flex-col justify-evenly px-8 py-3">
          <span className="text-sm text-white text-center my-1">Humidity</span>
          <div className="mx-auto">
            <span className="text-5xl text-white text-center font-bold my-1 align-middle">
              {weather.current_weather.humidity}
            </span>
            <span className="text-3xl text-gray-300 align-middle">%</span>
          </div>
          <div className="relative pt-1">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs inline-block text-white">0</span>
              </div>
              <div>
                <span className="text-xs inline-block text-white">50</span>
              </div>
              <div className="text-right">
                <span className="text-xs inline-block text-white">100</span>
              </div>
            </div>
            <div className="overflow-hidden h-1 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${weather.current_weather.humidity}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-300"
              ></div>
            </div>
            <div className="flex items-center justify-end">
              <div className="text-right">
                <span className="text-xs inline-block text-white">%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-navy flex flex-col justify-evenly px-16 py-5">
          <span className="text-sm text-white text-center my-1">
            Visibility
          </span>
          <div className="mx-auto">
            <span className="text-5xl text-white text-center font-bold my-1 align-middle">
              {Math.round(weather.current_weather.visibility)}
            </span>
            <span className="text-3xl text-gray-300 align-middle">miles</span>
          </div>
        </div>
        <div className="bg-navy flex flex-col justify-evenly px-16 py-5">
          <span className="text-sm text-white text-center my-1">
            Air Pressure
          </span>
          <div className="mx-auto">
            <span className="text-5xl text-white text-center font-bold my-1 align-middle">
              {Math.round(weather.current_weather.air_pressure)}
            </span>
            <span className="text-3xl text-gray-300 align-middle">mb</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
