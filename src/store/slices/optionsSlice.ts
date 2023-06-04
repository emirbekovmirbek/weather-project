import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface IOptions {
  unit: string,
  theme: string
}

const initialState: IOptions = {
  theme: 'light',
  unit: 'metric',
}

export const optionSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setUnit: (state, action: PayloadAction<string>) => {
      state.unit = action.payload
    },
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
      document.body.className = action.payload
    }
  },

})

export const { setUnit, setTheme } = optionSlice.actions
export default optionSlice.reducer