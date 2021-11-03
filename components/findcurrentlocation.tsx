import { useRouter } from "next/router";
import { WeatherClient } from "@data/weather";
import { Location } from "@datatypes/weather";
import { SVGTarget } from "@components/icons";

export default function FindCurrentLocation(_props: any) {
  const router = useRouter();
  return (
    <button
      onClick={(_e) => {
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
      }}
      className="rounded-full shadow-lg bg-gray-500 p-2 text-white"
    >
      <SVGTarget />
    </button>
  );
}
