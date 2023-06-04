import { useAppSelector } from "../../hooks/useAppSelector"
import { selectdaysTemp } from "../../store/selectors"
import HourCard from "../hour-card/HourCard"
import "./style.css"


export default function ListHourWeather() {
  const daysTemp =  useAppSelector(selectdaysTemp)
  return (
    <div>
      <h3 className="list-hour-weather">Days</h3>
      <div className="list-hour-weather__cards">
        {daysTemp.map((item) => <HourCard key={item.dt} daily={item}/>)}
      </div>
    </div>
  )
}
