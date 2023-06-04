import { useEffect } from "react"
import WeatherWrappper from "./components/weather-wrapper/WeatherWrappper"
import { ILocation } from "./types/types";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { setCityName } from "./store/slices/citySlice";
import { fetchWeather } from "./store/slices/weatherSlice";


function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getLocation = async () => {
      const response = await fetch('api/json');
      const location: ILocation = await response.json();
      dispatch(setCityName(location.city))
      dispatch(fetchWeather({lat :location.lat, lon: location.lon}))
    }
    getLocation()
  }, [dispatch])
  return (
    <div className="app">
      <WeatherWrappper/>
    </div>
  )
}

export default App
