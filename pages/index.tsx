import Image from "next/image";
import { HeroLocation } from "@components/icons";
export default function Home() {
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
      <div className="w-full lg:w-2/3 bg-navy-dark flex flex-col justify-start items-center p-10">
        <div className="flex flex-row self-end text-2xl">
          <span className="m-3 px-3 py-2 rounded-full bg-gray-300 font-bold">
            ˚C
          </span>
          <span className="m-3 px-3 py-2 rounded-full bg-navy text-white font-bold">
            ˚F
          </span>
        </div>
        <div className="flex flex-row justify-evenly">
          <div className="w-full mx-2 bg-navy text-white flex flex-col">
            <span>Tomorrow</span>
            <img src="/Shower.png" className="m-auto" />
            <div className="grid grid-cols-2 gap-3">
              <span>16˚c</span>
              <span>11˚c</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
