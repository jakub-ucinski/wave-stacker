import { useAppSelector } from "../store";
import { resolution as resolutionType } from "../store/viewer-slicer";

const ZOOM_MAP = {
  1: 25,
  2: 50,
  3: 100,
  4: 200,
  5: 400,
};

const usePoints = () => {
  const wavesSlice = useAppSelector((state) => state.waves);
  const settingSlice = useAppSelector((state) => state.settings);

  return (
    dx: number = 0,
    defaultFrequency: number = 550,
    zoom = settingSlice.zoom,
    resolution = (11 - settingSlice.resolution) as resolutionType
  ) => {
    const increment = resolution;
    const percentage = ZOOM_MAP[zoom];
    const points: number[] = [];

    for (let i = 0; i <= Math.ceil((360 * percentage) / 100); i += increment) {
      points.push(0);
    }

    let ratio: number;
    let degreeCounter: number;
    let valToAdd: number;

    wavesSlice.waves.forEach((wave) => {
      ratio = wave / defaultFrequency;
      degreeCounter = 0;

      points.forEach((_, index, arr) => {
        valToAdd = Math.sin((degreeCounter * ratio * Math.PI + dx) / 180);
        arr[index] += valToAdd;
        degreeCounter += increment;
      });

      const pointMax = Math.max(...points);
      const pointMin = Math.min(...points);

      const maxAbs = Math.max(Math.abs(pointMax), Math.abs(pointMin));

      points.forEach((_, index, arr) => {
        arr[index] = arr[index] / maxAbs;
      });
    });

    return points;
  };
};

export default usePoints;
