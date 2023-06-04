import Card from '../card/Card'
import Input from '../input/Input'
import ListHourWeather from '../list-hour-weather/ListHourWeather'
import Setting from '../settings/Setting'
import WeatherShortInfo from '../weather-shor-info/WeatherShortInfo'
import './style.css'


export default function WeatherWrappper() {
  return (
    <div className="weather-wrapper">
      <Setting/>
      <Input/>
      <WeatherShortInfo/>
      <Card/>
      <ListHourWeather/>
    </div>
  )
}
