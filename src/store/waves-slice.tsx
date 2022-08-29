import { createSlice } from "@reduxjs/toolkit";

const initialWavesSliceState: WavesSlice = { waves: [] };
export interface WavesSlice {
  waves: number[];
}

const wavesSlice = createSlice({
  initialState: initialWavesSliceState,
  reducers: {
    addWave(state, action) {
      const newWaveFrequency: number = action.payload;
      const waveExists = state.waves.find((wave) => wave === newWaveFrequency);
      !waveExists && state.waves.push(newWaveFrequency);
    },

    removeWave(state, action) {
      const frequencyToRemove: number = action.payload;
      const index = state.waves.indexOf(frequencyToRemove);
      index > -1 && state.waves.splice(index, 1);
    },
  },
  name: "waves",
});

export default wavesSlice.reducer;
export const wavesActions = wavesSlice.actions;
