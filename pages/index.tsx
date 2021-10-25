import dayjs from "dayjs";
import classNames from "classnames";
import { HeroLocation } from "@components/icons";
import { Weather } from "@datatypes/weather";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";
import data from "@data/data.json";

interface HomeProps {
  weather: Weather;
}

export async function getStaticProps(
  _context: GetStaticPropsContext
): Promise<GetStaticPropsResult<HomeProps>> {
  return { props: { weather: data } };
}

export default function Home({ weather }: HomeProps) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
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
          <img src="/Shower.png" className="m-auto" />
        </div>
        <div className="flex flex-col justify-between p-5 h-full">
          <h2 className="text-9xl text-gray-300 text-center">
            15<span className="text-7xl text-gray-400">˚c</span>
          </h2>
          <span className="text-4xl text-gray-400 text-center my-auto">
            Shower
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
      <div className="w-full lg:w-2/3 bg-navy-dark flex flex-col justify-start items-center px-6 py-3">
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
              className={classNames(
                "w-1/5 bg-navy text-white flex flex-col px-4 py-3",
                {
                  "mx-2": i > 0 && i < l.length - 1,
                  "mr-2": i == 0,
                  "ml-2": i == l.length - 1,
                }
              )}
            >
              <span className="text-center">
                {dayjs(cw.applicable_date).format("dddd")}
              </span>
              <div className="p-2">
                <img src="/Shower.png" className="m-auto" />
              </div>
              <div className="grid grid-cols-2 gap-5 text-sm mt-2">
                <span className="text-center">{cw.max_temp.toFixed(2)}˚C</span>
                <span className="text-gray-400 text-center">
                  {cw.min_temp.toFixed(2)}˚C
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
              <span className="text-5xl text-white text-center font-bold my-1 align-middle">
                7
              </span>
              <span className="text-3xl text-gray-300 align-middle">mph</span>
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
                  <span className="text-xs font-semibold inline-block text-yellow-600">
                    0
                  </span>
                </div>
                <div>
                  <span className="text-xs font-semibold inline-block text-yellow-600">
                    25
                  </span>
                </div>
                <div>
                  <span className="text-xs font-semibold inline-block text-yellow-600">
                    50
                  </span>
                </div>
                <div>
                  <span className="text-xs font-semibold inline-block text-yellow-600">
                    75
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-yellow-600">
                    100
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-1 text-xs flex rounded bg-yellow-200"></div>
              <div className="flex items-center justify-end">
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-yellow-600">
                    %
                  </span>
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
      </div>
    </div>
  );
}
