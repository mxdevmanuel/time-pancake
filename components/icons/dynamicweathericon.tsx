const weatherIcons: Record<string, string> = {
  hc: "/HeavyCloud.png",
  lc: "/LightCloud.png",
  sn: "/Snow.png",
  sl: "/Sleet.png",
  h: "/Hail.png",
  hr: "/HeavyRain.png",
  lr: "/LightRain.png",
  s: "/Shower.png",
  c: "/Clear.png",
};

interface DynamicWeatherIconProps {
  weatherType: string;
  className?: string;
}

export default function DynamicWeatherIcon(props: DynamicWeatherIconProps) {
  return (
    <img src={weatherIcons[props.weatherType]} className={props.className} />
  );
}
