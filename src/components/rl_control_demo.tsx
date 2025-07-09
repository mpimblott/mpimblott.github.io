import React from 'react';
import * as motion from "motion/react-client";

interface QValue {
  value: number;
}


/**
 * A demonstration of reinforcement learning control
 */
function RlControlDemo({data, maxValue}: { data: QValue[], maxValue: number }) {
  return (<>
      <div className="flex flex-col gap-2">
        <input type="range" min="0" max={maxValue} defaultValue="5" className="slider"/>
        <input type="range" min="0" max={maxValue} defaultValue="3" className="slider"/>
        <input type="range" min="0" max={maxValue} defaultValue="7" className="slider"/>
      </div>
      <div className="flex flex-row mt-3">
        {data.map((cell, i) => (<motion.div
          key={`${i}`}
          className="aspect-square h-5 w-5"
          initial={{opacity: 0}}
          animate={{
            opacity: 1, backgroundColor: `hsl(${33 + (240 - 33) * (1 - cell.value / maxValue)}, 100%, 50%)`
          }}
          transition={{duration: 0.5, delay: (i) * 0.02}}
        />))}
      </div>
    </>);
}

export default RlControlDemo;