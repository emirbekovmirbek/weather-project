import './style.css'
import { IDaily } from '../../types/types'
import dayjs from 'dayjs'
import { useAppSelector } from '../../hooks/useAppSelector'
import { selectUnit } from '../../store/selectors'
import { getTemp } from '../../utils/getTemp'

interface IPropsType {
  daily: IDaily
}

export default function HourCard({ daily }: IPropsType) {
  const unit = useAppSelector(selectUnit)
  return (
    <div className="card-small">
      <p className="card-small__time">{dayjs.unix(daily.dt).format('dddd')}</p>
      {/* <Rain className="card-small__status-icon"/> */}
      <div className="card-small__status-icon">
        <img src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}.png`} alt={daily.weather[0].main} />
      </div>
      <p className="card-small_temp">
        {getTemp(unit, daily.temp.day)}
        <span> {unit === 'metric' ? 'C' : 'F'}<sup>0</sup></span>
      </p>
    </div>
  )
}
