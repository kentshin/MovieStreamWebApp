import { configureStore } from '@reduxjs/toolkit'
import homeSlice from './homeSlice'

export const providerStore = configureStore({
    reducer: {
      home: homeSlice,
    },
  })