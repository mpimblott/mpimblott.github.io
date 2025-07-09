import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function ConnectedNetwork() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    // Get container dimensions
    const container = svgRef.current.parentElement;
    if (!container) return;
    const size = Math.min(container.clientWidth, container.clientHeight);
    const margin = 10;

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${size} ${size}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    // Define layers
    const layers = [{nodes: 3, x: margin},             // Input layer
      {nodes: 2, x: size - margin}     // Output layer
    ];

    // Create nodes data
    const nodes: { x: number, y: number }[] = [];
    layers.forEach(layer => {
      const spacing = size / (layer.nodes + 1);
      for (let i = 0; i < layer.nodes; i++) {
        nodes.push({
                     x: layer.x, y: spacing * (i + 1)
                   });
      }
    });

    const sumAllNodes = () => layers.reduce((sum, layer) => sum + layer.nodes, 0);

    // Create edges data
    const edges: { source: { x: number, y: number }, target: { x: number, y: number } }[] = [];
    for (let i = 0; i < layers[0].nodes; i++) {           // For each input node
      for (let j = layers[0].nodes; j < sumAllNodes(); j++) {         // Connect to each output node
        edges.push({
                     source: nodes[i], target: nodes[j]
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
      .attr('stroke-width', 1)
      .each(function (d, i) {
        const animate = () => {
          d3.select(this)
            .transition()
            .duration(1000)
            .delay(i * 200)
            .attr('stroke', '#4299e1')
            .transition()
            .duration(1000)
            .attr('stroke', '#aaa')
            .on('end', function () {
              d3.select(this)
                .transition()
                .delay(edges.length * 200 + 2000) // Add a 2-second delay before restart
                .duration(0)
                .on('end', function () {
                  d3.select(this)
                    .call(() => this.parentNode?.appendChild(this))
                    .call(animate);
                });
            });
        };
        animate();
      });

    // Draw nodes
    svg.selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', 4)
      .attr('fill', '#4299e1');

  }, []);

  return (<div className="flex justify-center w-full h-full">
    <svg ref={svgRef} style={{width: '100%', height: '100%'}}></svg>
  </div>);
}

export default ConnectedNetwork;