import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import wavesSlice, { WavesSlice } from "./waves-slice";

interface RootState {
  waves: WavesSlice;
}

const store = configureStore({
  reducer: {
    waves: wavesSlice,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
