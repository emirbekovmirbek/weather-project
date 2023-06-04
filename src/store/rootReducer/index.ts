import weatherReducer from '../slices/weatherSlice'
import citiesReducer from '../slices/citySlice'
import optionsReduce from '../slices/optionsSlice'
import { combineReducers } from "@reduxjs/toolkit"


const rootReducers = combineReducers({
  weather: weatherReducer,
  cities: citiesReducer,
  options: optionsReduce
})

export default rootReducers