import { useAppSelector } from "../store";

const usePoints = () => {
  const wavesSlice = useAppSelector((state) => state.waves);

  return (
    dx: number = 0,
    defaultFrequency: number = 550,
    percentage: number = 100,
    increment: number = 5
  ) => {
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
