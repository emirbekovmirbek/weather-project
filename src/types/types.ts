export interface ILocation {
  lat: number;
  lon: number;
  country: string,
  city: string,
}

type weather = {
  id: number,
  main: string,
  description: string,
  icon: string
}
type temp = {
  day: number,
  eve: number
}

interface currentType {
  dt: number;
  temp: number;
  sunrise: number;
  weather: weather[];
  'wind_speed': number,
  clouds: number;
  humidity: number;
}
export interface IDaily {
  dt: number,
  temp: temp,
  sunrise: number,
  weather: weather[],
  'wind_speed': number,
  clouds: number
  humidity: number
}

export interface IWeather {
  lat: number;
  lon: number;
  timezone: number;
  current: currentType;
  daily: IDaily[]

}

interface LocalNames {
  [key: string]: string;
}
type coord = {
  lat: number
  lon: number
}
export interface ICity {
  coord: coord;
  state: string;
  name: string;
  sys: LocalNames;
  id: number
}