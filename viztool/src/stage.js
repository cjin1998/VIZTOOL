import React, { useEffect, useRef, useState } from "react";
import './WorldMap.css';
const Context = React.createContext(null);

export function Stage({ width, height, children }) {
  const svgRef = useRef(null);
  const [svg, setSvg] = useState(null);
  useEffect(() => setSvg(svgRef.current), []);
  //console.log({svg})
  return (
    <svg ref={svgRef} width={width} height={height} class="Map">
      <Context.Provider value={svg}>{children}</Context.Provider>
    
    </svg>
  );
}

export function useSvg() {
  return React.useContext(Context);
}
