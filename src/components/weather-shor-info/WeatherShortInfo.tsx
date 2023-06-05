import './style.css'
import { useAppSelector } from '../../hooks/useAppSelector'
import { selectCity, selectWeather } from '../../store/selectors'


export default function WeatherShortInfo() {
  const city = useAppSelector(selectCity)
  const weather = useAppSelector(selectWeather)
  return (
    <div className="short-info">
      <h1 className="short-info__title">{city}</h1>
      <div className="short-info__icon">
        <img src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@4x.png`} alt={weather.current.weather[0].main} />
      </div>
    </div>
  )
}
