import React from "react";
import { useAppSelector } from "../store";
import styles from "./WaveList.module.scss";
import WaveListItem from "./WaveListItem";

const WaveList = () => {
  const wavesSlice = useAppSelector((state) => state.waves);
  return (
    <>
      {wavesSlice.waves.length > 0 && (
        <div className={styles.WaveList}>
          {wavesSlice.waves.map((wave) => (
            <WaveListItem key={wave} frequency={wave} />
          ))}
        </div>
      )}
    </>
  );
};

export default WaveList;
