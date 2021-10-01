import React from "react";
import { VictoryPie, VictoryLabel } from "victory";

export default function MemberCountPrograms(props) {
  const data = props.data;
  return (
    <div className="">
      <svg viewBox="0 0 400 400">
        <VictoryPie
        padAngle={({ datum }) => datum.y}
          standalone={false}
          innerRadius={80}
          labelRadius={100}
          animate={{
            duration: 500,
            onLoad: { duration: 500 },
          }}
          colorScale={["#008f68", "#6DB65B", "#4AAE9B", "#EFBB35"]}
          data={props.data}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 15 }}
          x={200}
          y={200}
          text="Memebrs is Programs"
        />
        
      </svg>
   
      <h2></h2>
    </div>
  );
}
