import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValue); //max(1,2,3) ex:- ... meaning eka thani thani values vidiyata argument pass karanava max function ekata
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
