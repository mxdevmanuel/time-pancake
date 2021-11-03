import { useContext } from "react";
import { conditionalCelciusToFahrenheit as cctf } from "@utils/degreeconvertion";
import { Weather } from "@datatypes/weather";
import { GlobalContext, IGlobalContext } from "@data/globalcontext";
import { HeroLocation } from "@components/icons";
import FindCurrentLocation from "@components/findcurrentlocation";
import DynamicWeatherIcon from "@components/icons/dynamicweathericon";
import dayjs from "dayjs";

interface TodayProps {
  weather: Weather;
  fahrenheit: boolean;
}

export default function Today({ weather, fahrenheit }: TodayProps) {
  const context: IGlobalContext = useContext(GlobalContext);
  return (
    <div className="w-full md:w-1/3 bg-navy flex flex-col items-center min-h-screen lg:min-h-0">
      <div className="w-full flex flex-row justify-between px-8 mt-8 justify-self-start">
        <button
          onClick={() => context.showSearch(true)}
          className="bg-gray-500 shadow-lg text-white px-4 py-2"
        >
          Search for places
        </button>
        <FindCurrentLocation />
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
          {cctf(weather.current_weather.the_temp, fahrenheit)}
          <span className="text-7xl text-gray-400">
            ˚{fahrenheit ? "F" : "C"}
          </span>
        </h2>
        <span className="text-4xl text-gray-400 text-center my-auto">
          {weather.current_weather.weather_state_name}
        </span>
        <span className="text-lg text-gray-400 text-center my-3">
          Today ·{" "}
          {dayjs(weather.current_weather.applicable_date).format("ddd, D MMM")}
        </span>
        <span className="text-lg text-gray-400 text-center flex place-content-center">
          <HeroLocation className="h-5 w-5 mt-1" />
          {weather.title}
        </span>
      </div>
    </div>
  );
}
