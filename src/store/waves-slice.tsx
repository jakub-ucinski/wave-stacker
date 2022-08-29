import { createSlice } from "@reduxjs/toolkit";

const initialWavesSliceState: WavesSlice = { waves: [] };
export interface WavesSlice {
  waves: number[];
}

const wavesSlice = createSlice({
  initialState: initialWavesSliceState,
  reducers: {
    addWave(states, action) {
      const newWaveFrequency: number = action.payload;
      const waveExists = states.waves.find((wave) => wave === newWaveFrequency);
      !waveExists && states.waves.push(newWaveFrequency);
    },

    removeWave(states, action) {
      const frequencyToRemove: number = action.payload;
      const index = states.waves.indexOf(frequencyToRemove);
      index > -1 && states.waves.splice(index, 1);
    },
  },
  name: "waves",
});

export default wavesSlice.reducer;
export const wavesActions = wavesSlice.actions;
