import Head from "next/head";
import Today from "@components/today";
import Highlights from "@components/highlights";
import WeatherTile from "@components/weathertile";
import UnitSelector from "@components/unitselector";
import { Fragment } from "react";
import { GetServerSidePropsResult, GetServerSidePropsContext } from "next";
import { useState } from "react";
import { Weather } from "@datatypes/weather";
import { WeatherClient } from "@data/weather";

interface HomeProps {
  weather: Weather;
}

export async function getServerSideProps(
  _context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<HomeProps>> {
  const client = new WeatherClient();
  return {
    props: {
      weather: await client.getWeather("44418"),
    },
  };
}

export default function Home({ weather }: HomeProps) {
  const [fahrenheit, setFahrenheit] = useState(false);
  return (
    <Fragment>
      <Head>
        <title>Weather App</title>
      </Head>
      <div className="flex flex-col md:flex-row font-raleway">
        <Today weather={weather} fahrenheit={fahrenheit}></Today>
        <div className="w-full min-h-screen md:w-2/3 bg-navy-dark">
          <div className="h-full md:w-4/5 2xl:w-3/5 flex flex-col justify-evenly items-center mx-auto py-3">
            <UnitSelector
              fahrenheit={fahrenheit}
              setFahrenheit={setFahrenheit}
            />
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-5 w-full">
              {weather.consolidated_weather.map((cw, i) => (
                <WeatherTile
                  fahrenheit={fahrenheit}
                  weather={cw}
                  isTomorrow={i == 0}
                />
              ))}
            </div>
            <Highlights weather={weather} />
            <footer className="mt-3 2xl:mt-auto">
              <p className="text-center text-gray-300">
                created by{" "}
                <span className="font-bold underline">mxdevmanuel</span> -
                devChallenges.io
              </p>
            </footer>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
