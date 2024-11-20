import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "../store/reducer/movieSlice";
import tvReducer from "../store/reducer/tvSlice";
import peopleReducer from "../store/reducer/peopleSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    people: peopleReducer,
  },
})