import React from "react";
import {
  VictoryPie,
} from "victory";

export default function MemberCountPrograms(props) {
    const data = props.data;
    return (
        <div className="">
            <VictoryPie
                animate={{
                duration: 500,
                onLoad: { duration: 500 }
                }}
                colorScale={["#008f68", "#6DB65B", "#4AAE9B", "#EFBB35"]}
                data={props.data}/>
        </div>
      );
}