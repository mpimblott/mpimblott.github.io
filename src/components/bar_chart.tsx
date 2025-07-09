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
  return (<div className="flex justify-center h-full">
    <div className="flex w-fit p-2 justify-between gap-1 items-end h-full">
      {values.map((bar, index) => (
        <div key={index} className="flex relative group h-full items-end" role="graphics-symbol"
             aria-label={`${bar.label}: ${bar.value * 100}%`}>
          <motion.div style={{backgroundColor: bar.colour}}
                      className="w-5 rounded-sm"
                      initial={{height: 0}}
                      whileInView={{height: `${bar.value * 100}%`}}
                      transition={{duration: 0.4, delay: Math.min(index * 0.1, 0.5)}}/>
          <div></div>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 hidden group-hover:block z-10"
               style={{marginBottom: `${(1.2 - bar.value) * -100}%`}}>
            <div className="bg-gray-800 text-white text-sm px-2 py-2 rounded whitespace-nowrap">
              {bar.label}
            </div>
            <div className="w-2 h-2 bg-gray-800 rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1"></div>
          </div>
        </div>))}
    </div>
  </div>)
}

export default BarChart;