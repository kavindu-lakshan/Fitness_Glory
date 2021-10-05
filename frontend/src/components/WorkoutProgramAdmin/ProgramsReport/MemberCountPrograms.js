import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryLegend,
  VictoryTheme,
  VictoryAxis,
} from "victory";

export default function MemberCountPrograms(props) {
  const data = props.data;
  const chartTheme = {
    axis: {
      style: {
        tickLabels: {
          // this changed the color of my numbers to white
          fill: "white",
        },
      },
    },
  };

  return (
    <div className="">
      <VictoryChart
        style={{ fill: "white", fontSize: 15 }}
        responsive={false}
        animate={{
          duration: 500,
          onLoad: { duration: 500 },
        }}
        domainPadding={{ x: 0 }}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          tickFormat={(x) => x}
          style={{
            axis: {
              stroke: "white", //CHANGE COLOR OF X-AXIS
            },
            tickLabels: {
              fill: "white", //CHANGE COLOR OF X-AXIS LABELS
            },
            grid: {
              stroke: "white", //CHANGE COLOR OF X-AXIS GRID LINES
              strokeDasharray: "7",
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(y) => y}
          style={{
            axis: {
              stroke: "white", //CHANGE COLOR OF Y-AXIS
            },
            tickLabels: {
              fill: "white", //CHANGE COLOR OF Y-AXIS LABELS
            },
            grid: {
              stroke: "white", //CHANGE COLOR OF Y-AXIS GRID LINES
              strokeDasharray: "7",
            },
          }}
        />

        <VictoryBar
          style={{
            data: { fill: "#EFBB35" },
          }}
          data={data}
        />
      </VictoryChart>
    </div>
  );
}
