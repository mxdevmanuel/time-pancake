import { useContext, useState, useRef, FormEvent } from "react";
import { useRouter } from "next/router";
import { GlobalContext, IGlobalContext } from "@data/globalcontext";
import { WeatherClient } from "@data/weather";
import { Location } from "@datatypes/weather";

interface SearchForPlacesProps {}

export default function SearchForPlaces(_props: SearchForPlacesProps) {
  const context: IGlobalContext = useContext(GlobalContext);
  const [locations, setLocations] = useState([]);
  const queryRef = useRef("");
  const clientRef = useRef(new WeatherClient());
  const router = useRouter();

  return (
    <div className="w-1/3 bg-navy">
      <div className="flex flex-col justify-start items-center w-full px-10">
        <div className="relative p-3 w-full h-11">
          <span
            onClick={() => context.showSearch(false)}
            className="absolute right-0 text-xl text-white cursor-pointer"
          >
            X
          </span>
        </div>
        <div className="container flex flex-row mb-12">
          <div className="w-full">
            <div className="relative">
              <div className="absolute inset-y-2 ml-2 text-white">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                onInput={(e: FormEvent<HTMLInputElement>) => {
                  queryRef.current = e.currentTarget.value;
                }}
                className="w-full border border-white pl-9 py-2 bg-transparent text-white"
              />
            </div>
          </div>
          <div className="ml-4">
            <button
              onClick={(_e) => {
                clientRef.current
                  .locationQuerySearch(queryRef.current)
                  .then((locations: Location[]) => setLocations(locations));
              }}
              className="bg-blue-500 px-4 py-2 text-white font-bold hover:bg-blue-600"
            >
              Search
            </button>
          </div>
        </div>
        {locations.map((location: Location) => (
          <div
            key={location.woeid}
            className="group relative w-full my-2 px-6 py-3 hover:border border-gray-50 text-white text-left cursor-pointer"
            onClick={() => {
              router.push({ pathname: "/", query: { woeid: location.woeid } });
              context.showSearch(false);
            }}
          >
            {location.title}
            <span className="absolute right-5 opacity-0 group-hover:opacity-100 text-white">
              &gt;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
