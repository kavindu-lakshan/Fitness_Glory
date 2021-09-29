import React from "react";
import { VictoryBar, VictoryChart, VictoryLegend, VictoryTheme, VictoryAxis } from "victory";

export default function MemberCountPrograms(props) {
  const data = props.data;
  return (
    <div className="">
      <VictoryChart
        responsive={false}
        animate={{
          duration: 500,
          onLoad: { duration: 500 },
        }}
        domainPadding={{ x: 0 }}
        theme={VictoryTheme.material}
      >
        <VictoryLegend
          x={125}
          y={50}
          title=" Active Members"
          centerTitle
          orientation="horizontal"
          gutter={20}
          style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
          data={data}
        />
        <VictoryBar data={data} />
      </VictoryChart>
    </div>
  );
}
