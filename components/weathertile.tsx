import dayjs from "dayjs";
import { conditionalFormattedCelciusToFahrenheit as cfctf } from "@utils/degreeconvertion";
import DynamicWeatherIcon from "@components/icons/dynamicweathericon";
import { ConsolidatedWeather } from "@datatypes/weather";

interface WeatherTileProps {
  weather: ConsolidatedWeather;
  fahrenheit: boolean;
  isTomorrow?: boolean;
}
export default function WeatherTile({
  weather: cw,
  isTomorrow,
  fahrenheit,
}: WeatherTileProps) {
  return (
    <div className="bg-navy text-white flex flex-col p-3">
      <span className="text-center text-xl">
        {isTomorrow
          ? "Tomorrow"
          : dayjs(cw.applicable_date).format("ddd, D MMM")}
      </span>
      <div className="h-full">
        <DynamicWeatherIcon
          weatherType={cw.weather_state_abbr}
          className="m-auto"
        />
      </div>
      <div className="grid grid-cols-2 text-xl mt-auto">
        <span className="text-center">{cfctf(cw.max_temp, fahrenheit)}</span>
        <span className="text-gray-400 text-center">
          {cfctf(cw.min_temp, fahrenheit)}
        </span>
      </div>
    </div>
  );
}
