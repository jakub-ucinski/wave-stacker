import { createSlice } from "@reduxjs/toolkit";

export interface SettingsSlice {
  resolution: resolution;
  zoom: zoom;
}

const initialSettingsSliceState: SettingsSlice = {
  resolution: 5,
  zoom: 3,
};

export type resolution = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type zoom = 1 | 2 | 3 | 4 | 5;

const settingsSlice = createSlice({
  initialState: initialSettingsSliceState,
  reducers: {
    changeResolution(state, action: { payload: resolution }) {
      state.resolution = action.payload;
    },
    changeZoom(state, action: { payload: zoom }) {
      state.zoom = action.payload;
    },
  },
  name: "settings",
});

export default settingsSlice.reducer;
export const settingsActions = settingsSlice.actions;
