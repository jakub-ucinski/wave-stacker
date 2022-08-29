import React, { useRef, useEffect, FC } from "react";
import styles from "./Segment.module.scss";

interface SegmentProps {
  height: number;
}

const Segment: FC<SegmentProps> = (props) => {
  const pointRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pointRef && pointRef.current) {
      pointRef.current.style.top = `${(props.height - 1) * -50}%`;
    }
  }, [props.height]);

  return (
    <div className={styles.Segment}>
      <div className={styles.Middle}></div>
      <div className={styles.Point} ref={pointRef}></div>
    </div>
  );
};

export default Segment;
