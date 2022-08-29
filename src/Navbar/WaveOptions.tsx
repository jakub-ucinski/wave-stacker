import React, { useState } from "react";
import Button from "../UI/ Button/Button";
import Input from "../UI/Input/Input";
import styles from "./WaveOptions.module.scss";
import { useAppDispatch } from "../store";
import { wavesActions } from "../store/waves-slice";
import Label from "../UI/Label/Label";

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

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.currentTarget.value);
    isNaN(val) && setFreq("");
    if (val >= 0 && val < 1000) setFreq(val.toString());
  };

  const addWaveHandler = () => {
    validateFreq(freq) && dispatch(wavesActions.addWave(freq)) && setFreq("");
  };

  const buttonGreyedOut = !validateFreq(freq) ? styles.GreyAddButton : "";

  return (
    <div>
      <Label htmlFor="add-waves">Add Waves</Label>

      <div className={styles.InputBlock}>
        <div className={styles.InputWrapper}>
          <Input
            id="add-waves"
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
    </div>
  );
};

export default WaveOptions;
