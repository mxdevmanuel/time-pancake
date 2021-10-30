import { SVGLocation } from "@components/icons";
interface PointsOfCompassProps {
  direction: string;
}

const directions: Record<string, number> = {
  NE: 0,
  ENE: 22.5,
  E: 45,
  ESE: 67.5,
  SE: 90,
  SSE: 112.5,
  S: 135,
  SSW: 157.5,
  SW: 180,
  WSW: 202.5,
  W: 225,
  WNW: 247.5,
  NW: 270,
  NNW: 292.5,
  N: 315,
  NNE: 337.5,
};

export default function PointsOfCompass(props: PointsOfCompassProps) {
  return (
    <SVGLocation
      style={{ transform: `rotate(${directions[props.direction]}deg)` }}
    ></SVGLocation>
  );
}
