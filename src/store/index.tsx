import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import settingsSlice, { SettingsSlice } from "./viewer-slicer";
import wavesSlice, { WavesSlice } from "./waves-slice";

interface RootState {
  waves: WavesSlice;
  settings: SettingsSlice;
}

const store = configureStore({
  reducer: {
    waves: wavesSlice,
    settings: settingsSlice,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
