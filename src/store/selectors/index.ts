import { RootState } from "../index";


export const selectUnit = (state: RootState) => state.options.unit
export const selectTheme = (state: RootState) => state.options.theme
export const selectCity = (state: RootState) => state.cities.city.name
export const selectCities = (state: RootState) => state.cities.cities
export const selectWeather = (state: RootState) => state.weather.weather
export const selectdaysTemp = (state: RootState) => state.weather.weather.daily
