import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IWeather } from '../../types/types'


interface WeahterState {
  weather: IWeather;
}

const initialState: WeahterState = {
  weather: {
    lat: 0,
    lon: 0,
    timezone: 0,
    current: {
      dt: 0,
      temp: 0,
      sunrise: 0,
      weather: [
        {
          id: 0,
          main: '',
          description: '',
          icon: '01d'
        },
      ],
      'wind_speed': 0,
      clouds: 0,
      humidity: 0
    },
    daily: []

  },
}

export const fetchWeather = createAsyncThunk('weather/fetch', async(params: { lat: number, lon: number }) => {
  const response = await fetch(`https://openweathermap.org/data/2.5/onecall?lat=${params.lat}&lon=${params.lon}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`)
  return (await response.json()) as IWeather
})

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, { payload }) => {
      state.weather = payload
    })
  }
})

export default weatherSlice.reducer