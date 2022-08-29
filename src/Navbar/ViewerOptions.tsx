import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import {
  resolution as resolutionType,
  zoom as zoomType,
  settingsActions,
} from "../store/viewer-slicer";
import Input from "../UI/Input/Input";
import Label from "../UI/Label/Label";
import styles from "./ViewerOptions.module.scss";

const ViewerOptions = () => {
  const settingSlice = useAppSelector((state) => state.settings);

  const [resolution, setResolution] = useState<resolutionType>(
    settingSlice.resolution
  );
  const [zoom, setZoom] = useState<zoomType>(settingSlice.zoom);

  const dispatch = useAppDispatch();

  const resolutionChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.currentTarget.value);

    isNaN(val) && setResolution(settingSlice.resolution);

    if (val >= 1 && val <= 10) {
      dispatch(settingsActions.changeResolution(val as resolutionType));
      setResolution(val as resolutionType);
    }
  };

  const zoomChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.currentTarget.value);

    isNaN(val) && setZoom(settingSlice.zoom);

    if (val >= 1 && val <= 5) {
      dispatch(settingsActions.changeZoom(val as zoomType));
      setZoom(val as zoomType);
    }
  };

  return (
    <>
      <div className={styles.InputWrapper}>
        <Label htmlFor="resolution">Resolution</Label>
        <Input
          id="resolution"
          value={resolution}
          type="range"
          className={styles.RangeInput}
          onChange={resolutionChangeHandler}
          min="1"
          max="10"
        />
      </div>
      <div className={styles.InputWrapper}>
        <Label htmlFor="zoom">Zoom</Label>
        <Input
          id="zoom"
          value={zoom}
          type="range"
          className={styles.RangeInput}
          onChange={zoomChangeHandler}
          min="1"
          max="5"
        />
      </div>
    </>
  );
};

export default ViewerOptions;
