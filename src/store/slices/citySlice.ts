import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICity } from '../../types/types'


interface CitiesState {
  city: ICity
  cities: ICity[]
}

const initialState: CitiesState = {
  city: {
    coord: {
      lat: 0,
      lon: 0
    },
    state: '',
    name: '',
    sys: {'' : ''},
    id: 0
  },
  cities: []
}

export const fetchCities = createAsyncThunk('cities/fetchCities', async(param: string) => {
  const response = await fetch(`https://openweathermap.org/data/2.5/find?q=${param}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`)
  return (await response.json()).list as ICity[]
})

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    onChangeCity: (state, action: PayloadAction<ICity>) => {
      state.city = action.payload
    },
    setCityName: (state, action: PayloadAction<string>) => {
      state.city.name = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCities.fulfilled, (state, { payload }) => {
      state.cities = payload
    })
  }
})

export const { onChangeCity, setCityName } = citiesSlice.actions
export default citiesSlice.reducer