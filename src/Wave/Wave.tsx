import React, { FC, useEffect, useState } from "react";
import usePoints from "../hooks/usePoints";
import Segment from "./Segment";
import styles from "./Wave.module.scss";

interface WaveProps {}

const Wave: FC<WaveProps> = () => {
  const getPoints = usePoints();

  const [points, setPoints] = useState<number[]>([]);

  useEffect(() => {
    const date = new Date();

    const interval = setInterval(() => {
      const time = date.getTime();

      const dx = time / 2.5;
      setPoints(getPoints(dx));
    }, 100);

    return () => clearInterval(interval);
  });


  if (points.length === 0) {
    return (
      <div className={styles.wave}>
        Nothing to show - add waves to the wave list
      </div>
    );
  }

  const segments = points.map((height, index) => (
    <Segment key={index} height={height} />
  ));
  return (
    <div className={styles.Wave}>
      <div className={styles.HeightLimiter}>{segments}</div>
    </div>
  );
};

export default Wave;
