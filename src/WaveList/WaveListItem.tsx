import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import Button from "../UI/ Button/Button";
import styles from "./WaveListItem.module.scss";
// import

import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useAppDispatch } from "../store";
import { wavesActions } from "../store/waves-slice";

interface WaveListItemProps {
  frequency: number;
}

const WaveListItem: FC<WaveListItemProps> = ({ frequency }) => {
  const dispatch = useAppDispatch();

  const removeHandler = () => {
    dispatch(wavesActions.removeWave(frequency));
  };
  return (
    <div className={styles.WaveListItem}>
      {frequency}
      <Button
        onClick={removeHandler}
        className={styles.Button}
        variant={"white"}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </Button>
    </div>
  );
};

export default WaveListItem;
