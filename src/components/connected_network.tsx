import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function ConnectedNetwork() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    // Set up dimensions
    const width = 400;
    const height = 300;
    const margin = 40;

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Define layers
    const layers = [
      {nodes: 3, y: margin},             // Input layer
      {nodes: 4, y: height / 2},           // Hidden layer
      {nodes: 2, y: height - margin}     // Output layer
    ];

    // Create nodes data
    const nodes: { x: number, y: number }[] = [];
    layers.forEach(layer => {
      const spacing = width / (layer.nodes + 1);
      for (let i = 0; i < layer.nodes; i++) {
        nodes.push({
                     x: spacing * (i + 1),
                     y: layer.y
                   });
      }
    });

    // Create edges data
    const edges: { source: { x: number, y: number }, target: { x: number, y: number } }[] = [];
    for (let i = 0; i < 3; i++) {           // For each input node
      for (let j = 3; j < 7; j++) {         // Connect to each hidden node
        edges.push({
                     source: nodes[i],
                     target: nodes[j]
                   });
      }
    }
    for (let i = 3; i < 7; i++) {           // For each hidden node
      for (let j = 7; j < 9; j++) {         // Connect to each output node
        edges.push({
                     source: nodes[i],
                     target: nodes[j]
                   });
      }
    }

    // Draw edges
    svg.selectAll('line')
      .data(edges)
      .enter()
      .append('line')
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y)
      .attr('stroke', '#aaa')
      .attr('stroke-width', 1);

    // Draw nodes
    svg.selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', 10)
      .attr('fill', '#4299e1');

  }, []);

  return (
    <div className="flex justify-center">
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default ConnectedNetwork;