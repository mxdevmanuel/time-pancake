import { Weather, Location } from "@datatypes/weather";
import { AxiosResponse } from "axios";
import HttpClient from "@data/client";

const base =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/"
    : "https://mysterious-plateau-95225.herokuapp.com";

export class WeatherClient extends HttpClient {
  public constructor() {
    // A cors proxy for the metaweather api
    super(base);
  }

  public async locationQuerySearch(query: string): Promise<Location[]> {
    const response: AxiosResponse<Location[]> = await this.instance.get<
      Location[]
    >("/location", {
      params: { query },
    });
    return response.data;
  }

  public async locationLatLongSearch(
    latt: number,
    long: number
  ): Promise<Location[]> {
    const response: AxiosResponse<Location[]> = await this.instance.get<
      Location[]
    >("/lattlong", {
      params: { lattlong: `${latt},${long}` },
    });
    return response.data;
  }

  public async getWeather(woeid: string): Promise<Weather> {
    const { data }: AxiosResponse<Weather> = await this.instance.get<Weather>(
      `/weather`,
      { params: { woeid } }
    );
    return { ...data, current_weather: data.consolidated_weather.shift() };
  }
}
