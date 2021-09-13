import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryPie,
  VictoryTheme
} from "victory";

export default function MemberCountPrograms(props) {
    const data = props.data;
    return (
        <div className="">
            <VictoryChart         
                responsive={false}
                animate={{
                duration: 500,
                onLoad: { duration: 500 }
                }}
                domainPadding={{ x: 0}}
                theme={VictoryTheme.material}>
            <VictoryBar
                data={data}
            />
            </VictoryChart>
        </div>
      );
}