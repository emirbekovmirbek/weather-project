import { useState, FormEvent, useEffect } from 'react'
import Search from '../../assets/icon/search.png'
import './style.css'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { ICity } from '../../types/types'
import useDebounce from '../../hooks/useDebounce'
import { useAppSelector } from '../../hooks/useAppSelector'
import { selectCities } from '../../store/selectors'
import { fetchCities, onChangeCity } from '../../store/slices/citySlice'
import Dropdown from '../dropdown/Dropdown'
import { fetchWeather } from '../../store/slices/weatherSlice'



const initialValue = {
  coord: {
    lat: 0,
    lon: 0
  },
  state: '',
  name: '',
  sys: { '': ''},
  id: 0
}

export default function Input() {
  const dispatch = useAppDispatch()
  const [city, setCity] = useState<ICity>(initialValue)
  const debouncedValue = useDebounce<string>(city.name, 500)
  const cities = useAppSelector(selectCities)

  useEffect(() => {
    if(city.name !== '') {
      dispatch(fetchCities(city.name))
    }
  }, [debouncedValue, dispatch])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(onChangeCity(city))
    dispatch(fetchWeather(city.coord))
    setCity(initialValue)
  }

  const handleSelectCity = (param : ICity) => {    
    setCity(param)
  }
  return (
    <form className="input" onSubmit={handleSubmit}>
      <div className="input__wrapper">
        <input
          className="input__input"
          type="text"
          placeholder="City"
          value={city.name}
          onChange={(e) => setCity(prev => ({...prev, name: e.target.value}))}
        />
       <Dropdown list={cities} onSelect={handleSelectCity}/>
      </div>
        <button className="input__btn" type="submit">
          <img src={Search} alt="Search" />
        </button>
    </form>
  )
}
