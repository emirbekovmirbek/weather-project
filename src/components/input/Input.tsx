import { useState, FormEvent, useEffect, ChangeEvent, useRef } from 'react'
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
import { onChangeVisible } from '../../store/slices/optionsSlice'



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
  const debouncedValue = useDebounce<string>(city.name, 300)
  const cities = useAppSelector(selectCities)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(city.name !== '') {
      dispatch(fetchCities(city.name))
    }
  }, [debouncedValue, dispatch])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        dispatch(onChangeVisible(false))
      }
    }
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [ref, dispatch])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(city.name !== '') {
      const getCityWeather = (city.id !== 0 || cities.length === 0)  ? city : cities[0] 
      dispatch(onChangeCity(getCityWeather))
      dispatch(fetchWeather(getCityWeather.coord))
      dispatch(onChangeVisible(false))
      setCity(initialValue)
    }
  }

  const handleSelectCity = (param : ICity) => {     
    dispatch(onChangeCity(param))
    dispatch(fetchWeather(param.coord))
    setCity(initialValue)
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    dispatch(onChangeVisible(true))
    setCity(prev => ({...prev, name: value}))
  }
  return (
    <form className="input" onSubmit={handleSubmit}>
      <div ref={ref} className="input__wrapper">
        <input
          className="input__input"
          type="text"
          placeholder="City"
          value={city.name}
          onChange={handleChangeInput}
        />
       <Dropdown list={cities} onSelect={handleSelectCity} />
      </div>
        <button className="input__btn" type="submit">
          <img src={Search} alt="Search" />
        </button>
    </form>
  )
}
