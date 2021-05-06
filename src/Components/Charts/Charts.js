import React from "react";
import ChartBar from "./ChartBar";
import "./Charts.css";
const Charts = (props) => {
  let valueArray = props.datapoints.map((val) => val.value);
  let maxHeight = Math.max(...valueArray);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          value={datapoint.value}
          maxValue={maxHeight}
          lable={datapoint.lable}
          key={datapoint.lable}
        />
      ))}
    </div>
  );
};

export default Charts;
