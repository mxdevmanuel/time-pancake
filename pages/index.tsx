import { Fragment, useEffect, useState } from "react";
import { GetServerSidePropsResult, GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Today from "@components/today";
import Highlights from "@components/highlights";
import WeatherTile from "@components/weathertile";
import SearchForPlaces from "@components/searchforplaces";
import UnitSelector from "@components/unitselector";
import Footer from "@components/footer";
import { WeatherClient } from "@data/weather";
import { GlobalContext } from "@data/globalcontext";
import { Weather, Location } from "@datatypes/weather";

interface HomeProps {
  weather: Weather;
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<HomeProps>> {
  const client = new WeatherClient();
  let woeid: string = (context.query.woeid as string) ?? "44418";
  return {
    props: {
      weather: await client.getWeather(woeid),
    },
  };
}

export default function Home({ weather }: HomeProps) {
  const [fahrenheit, setFahrenheit] = useState(false);
  const [search, showSearch] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const client = new WeatherClient();
        client
          .locationLatLongSearch(coords.latitude, coords.longitude)
          .then((loc: Location[]) => {
            let curr = loc[0];
            if (curr) {
              router.push({ pathname: "/", query: { woeid: curr.woeid } });
            } else {
            }
          });
      });
    }
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Weather App</title>
      </Head>
      <GlobalContext.Provider value={{ showSearch: showSearch }}>
        <div className="flex flex-col md:flex-row font-raleway">
          {search ? (
            <SearchForPlaces />
          ) : (
            <Today weather={weather} fahrenheit={fahrenheit} />
          )}
          <div className="w-full min-h-screen md:w-2/3 bg-navy-dark">
            <div className="h-full md:w-4/5 2xl:w-3/5 flex flex-col justify-evenly items-center mx-auto py-3">
              <UnitSelector
                fahrenheit={fahrenheit}
                setFahrenheit={setFahrenheit}
              />
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-5 w-full">
                {weather.consolidated_weather.map((cw, i) => (
                  <WeatherTile
                    key={cw.id}
                    fahrenheit={fahrenheit}
                    weather={cw}
                    isTomorrow={i == 0}
                  />
                ))}
              </div>
              <Highlights weather={weather} />
              <Footer />
            </div>
          </div>
        </div>
      </GlobalContext.Provider>
    </Fragment>
  );
}
