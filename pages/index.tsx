import dayjs from "dayjs";
import classNames from "classnames";
import { HeroLocation } from "@components/icons";
import DynamicWeatherIcon from "@components/icons/dynamicweathericon";
import { Weather } from "@datatypes/weather";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";
import data from "@data/data.json";

interface HomeProps {
  weather: Weather;
}

export async function getStaticProps(
  _context: GetStaticPropsContext
): Promise<GetStaticPropsResult<HomeProps>> {
  return {
    props: {
      weather: { ...data, current_weather: data.consolidated_weather.shift() },
    },
  };
}

export default function Home({ weather }: HomeProps) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen  font-raleway">
      <div className="w-full lg:w-1/3 bg-navy flex flex-col items-center">
        <div className="w-full flex flex-row justify-between px-8 mt-8 justify-self-start">
          <button className="bg-gray-500 shadow-lg text-white px-4 py-2">
            Search for places
          </button>
          <button className="rounded-full shadow-lg bg-gray-500 p-2 text-white">
            <HeroLocation />
          </button>
        </div>
        <div
          className="container h-full flex "
          style={{
            backgroundImage: "url(/cloud_pattern.svg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 120%",
          }}
        >
          <DynamicWeatherIcon
            weatherType={weather.current_weather.weather_state_abbr}
            className="m-auto"
          />
        </div>
        <div className="flex flex-col justify-between p-5 h-full">
          <h2 className="text-9xl text-gray-300 text-center">
            {Math.round(weather.current_weather.the_temp)}
            <span className="text-7xl text-gray-400">˚c</span>
          </h2>
          <span className="text-4xl text-gray-400 text-center my-auto">
            {weather.current_weather.weather_state_name}
          </span>
          <span className="text-lg text-gray-400 text-center my-3">
            Today · Fri, 5 Jun
          </span>
          <span className="text-lg text-gray-400 text-center flex place-content-center">
            <HeroLocation className="h-5 w-5 mt-1" />
            Helsinki
          </span>
        </div>
      </div>
      <div className="w-full lg:w-2/3 bg-navy-dark flex flex-col justify-evenly items-center px-6 lg:px-36 py-3">
        <div className="flex flex-row self-end text-2xl">
          <span className="m-3 px-3 py-2 rounded-full bg-gray-300 font-bold">
            ˚C
          </span>
          <span className="m-3 px-3 py-2 rounded-full bg-navy text-white font-bold">
            ˚F
          </span>
        </div>
        <div className="flex flex-row justify-evenly w-full">
          {weather.consolidated_weather.map((cw, i, l) => (
            <div
              key={cw.id}
              className={classNames(
                "w-1/5 bg-navy text-white flex flex-col px-2 py-3",
                {
                  "mx-4": i > 0 && i < l.length - 1,
                  "mr-4": i == 0,
                  "ml-4": i == l.length - 1,
                }
              )}
            >
              <span className="text-center text-xl">
                {i == 0
                  ? "Tomorrow"
                  : dayjs(cw.applicable_date).format("ddd, D MMM")}
              </span>
              <div className="p-7">
                <DynamicWeatherIcon
                  weatherType={cw.weather_state_abbr}
                  className="m-auto"
                />
              </div>
              <div className="grid grid-cols-2 text-xl mt-auto">
                <span className="text-center">{Math.round(cw.max_temp)}˚C</span>
                <span className="text-gray-400 text-center">
                  {Math.round(cw.min_temp)}˚C
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full py-5">
          <span className="text-left text-white text-2xl">
            Today's highlights
          </span>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-navy flex flex-col justify-evenly px-16 py-3">
            <span className="text-sm text-white text-center my-1">
              Wind Status
            </span>
            <div className="mx-auto">
              <span className="text-5xl text-white text-center font-bold my-1">
                7
              </span>
              <span className="text-3xl text-gray-300">mph</span>
            </div>
            <span className="text-sm text-white text-center my-1">WSW</span>
          </div>
          <div className="bg-navy flex flex-col justify-evenly px-8 py-3">
            <span className="text-sm text-white text-center my-1">
              Humidity
            </span>
            <div className="mx-auto">
              <span className="text-5xl text-white text-center font-bold my-1 align-middle">
                84
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
              <div className="overflow-hidden h-1 text-xs flex rounded bg-yellow-200"></div>
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
            <div>
              <span className="text-5xl text-white text-center font-bold my-1 align-middle">
                6.4
              </span>
              <span className="text-3xl text-gray-300 align-middle">miles</span>
            </div>
          </div>
          <div className="bg-navy flex flex-col justify-evenly px-16 py-5">
            <span className="text-sm text-white text-center my-1">
              Air Pressure
            </span>
            <div>
              <span className="text-5xl text-white text-center font-bold my-1 align-middle">
                998
              </span>
              <span className="text-3xl text-gray-300 align-middle">mb</span>
            </div>
          </div>
        </div>
        <div className="justify-self-end">
          <p className="text-center text-gray-300">
            created by <span className="font-bold underline">mxdevmanuel</span>{" "}
            - devChallenges.io
          </p>
        </div>
      </div>
    </div>
  );
}
