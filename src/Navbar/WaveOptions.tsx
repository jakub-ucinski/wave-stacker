import React, { useState } from "react";
import Button from "../UI/ Button/Button";
import Input from "../UI/Input/Input";
import styles from "./WaveOptions.module.scss";
import { useAppDispatch } from "../store";
import { wavesActions } from "../store/waves-slice";

const validateFreq = (freq: string | undefined) => {
  if (!freq) {
    return false;
  }

  const val = parseInt(freq);
  return val > 0 && val < 1000;
};

const WaveOptions = () => {
  const [freq, setFreq] = useState<string>("");
  const dispatch = useAppDispatch();

  const changeHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const val = parseInt(e.currentTarget.value);
    isNaN(val) && setFreq("");
    val >= 0 && val < 1000 && setFreq(val.toString());
  };

  const addWaveHandler = () => {
    validateFreq(freq) && dispatch(wavesActions.addWave(freq));
  };

  const buttonGreyedOut = !validateFreq(freq) ? styles.GreyAddButton : "";

  return (
    <div className={styles.InputBlock}>
      <div className={styles.InputWrapper}>
        <Input
          value={freq}
          type="number"
          className={styles.Input}
          onChange={changeHandler}
          min="1"
          max="999"
        />
        <div className={styles.hz}>hz</div>
      </div>
      <Button
        className={buttonGreyedOut}
        variant={"black"}
        onClick={addWaveHandler}
      >
        Add
      </Button>
    </div>
  );
};

export default WaveOptions;
