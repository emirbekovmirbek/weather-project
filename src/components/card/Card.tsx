import './style.css'
import { ReactComponent as Humidity } from '../../assets/icon/humidity.svg'
import { ReactComponent as Wind } from '../../assets/icon/wind.svg'
import { useAppSelector } from '../../hooks/useAppSelector'
import { selectUnit, selectWeather } from '../../store/selectors'
import dayjs from 'dayjs'
import { getTemp } from '../../utils/getTemp'



export default function Card() {
  const weather = useAppSelector(selectWeather)
  const unit = useAppSelector(selectUnit)
  
  return (
    <div className="main-card">
      <div className="main-card__option">
        <div className="main-card__humidity">
          <div className="main-card__humidity-top">
            <Humidity />
            <span className="main-card__humidity-text">
            Humidity
            </span>
          </div>
          <p className="main-card__humidity-bottom">{weather?.current?.humidity}%</p>
        </div>
        <div className="main-card__humidity">
          <div className="main-card__humidity-top">
            <Wind />
            <span className="main-card__humidity-text">
            Wind
            </span>
          </div>
          <p className="main-card__humidity-bottom">{weather?.current?.wind_speed}m/s</p>
        </div>
      </div>
      <div>
        <h2 className="main-card__title">
          {getTemp(unit, weather.current.temp)} <span>{unit === 'metric' ? 'C' : 'F'}<sup>0</sup></span>
        </h2>
        <p className="main-card__day">{dayjs.unix(weather.current.dt).format('DD MMMM dddd HH:mm') || 'Tuesday 7:28 AM'}</p>
      </div>
    </div>
  )
}
