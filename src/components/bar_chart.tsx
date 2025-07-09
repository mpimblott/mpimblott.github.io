import React from 'react';
import * as motion from "motion/react-client";

interface BarChartValue {
  value: number;
  colour: string;
  label: string;
}

/**
 * Display a mock bar chart with an entry animation
 * @param values The height of the bars relative to the container
 */
function BarChart({values}: { values: BarChartValue[] }) {
  return (<div className="flex w-fit p-6 justify-between gap-1 h-40 items-end">
    {values.map((bar, index) => (
      <motion.div style={{backgroundColor: bar.colour}}
                  className="w-5 rounded-sm"
                  key={index}
                  initial={{height: 0}}
                  whileInView={{height: `${bar.value * 100}%`}}
                  transition={{duration: 0.4, delay: index * 0.1}}/>))}
  </div>)
}

export default BarChart;