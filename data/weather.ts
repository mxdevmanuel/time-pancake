import { Weather, Location } from "@datatypes/weather";
import { AxiosResponse } from "axios";
import HttpClient from "@data/client";

export class WeatherClient extends HttpClient {
  public constructor() {
    super("https://www.metaweather.com/api");
  }

  public async locationQuerySearch(query: string): Promise<Location[]> {
    let response: AxiosResponse<Location[]> = await this.instance.get<
      Location[]
    >("/location/search", {
      params: { query },
    });
    return response.data;
  }
  public async locationLatLongSearch(
    latt: number,
    long: number
  ): Promise<Location[]> {
    let response: AxiosResponse<Location[]> = await this.instance.get<
      Location[]
    >("/location/search", {
      params: { lattlong: `${latt},${long}` },
    });
    return response.data;
  }

  public async getWeather(woeid: string): Promise<Weather> {
    let { data }: AxiosResponse<Weather> = await this.instance.get<Weather>(
      `/location/${woeid}`
    );
    return { ...data, current_weather: data.consolidated_weather.shift() };
  }
}
