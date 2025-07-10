import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

function ConnectedNetwork() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState(300); // Default size for initial render
  
  // Client-side-only size calculation
  useEffect(() => {
    if (!svgRef.current) return;
    const container = svgRef.current.parentElement;
    if (!container) return;
    setSize(Math.min(container.clientWidth, container.clientHeight));
  }, []);

  // Client-side-only animation effect
  useEffect(() => {
    if (typeof window === 'undefined' || !svgRef.current) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    const margin = 10;

    // Define layers
    const layers = [
      { nodes: 3, x: margin },         // Input layer
      { nodes: 2, x: size - margin }   // Output layer
    ];

    // Create nodes data
    const nodes = layers.flatMap(layer => {
      const spacing = size / (layer.nodes + 1);
      return Array.from({ length: layer.nodes }, (_, i) => ({
        x: layer.x,
        y: spacing * (i + 1)
      }));
    });

    const sumAllNodes = () => layers.reduce((sum, layer) => sum + layer.nodes, 0);

    // Create edges data
    const edges = [];
    for (let i = 0; i < layers[0].nodes; i++) {
      for (let j = layers[0].nodes; j < sumAllNodes(); j++) {
        edges.push({
          source: nodes[i],
          target: nodes[j]
        });
      }
    }

    const svg = d3.select(svgRef.current)
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${size} ${size}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    // Draw edges with animations
    svg.selectAll('line')
      .data(edges)
      .enter()
      .append('line')
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y)
      .attr('stroke', '#aaa')
      .attr('stroke-width', 2)
      .each(function(d, i) {
        const animate = () => {
          d3.select(this)
            .transition()
            .duration(1000)
            .delay(i * 200)
            .attr('stroke', '#4299e1')
            .transition()
            .duration(1000)
            .attr('stroke', '#aaa')
            .on('end', function() {
              d3.select(this)
                .transition()
                .delay(edges.length * 200 + 2000)
                .duration(0)
                .on('end', function() {
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
      .attr('r', 5)
      .attr('fill', '#4299e1');
  }, [size]);

  // Initial SSR-compatible render
  const margin = 10;
  const initialNodes = [
    // Input layer
    { x: margin, y: size / 4 },
    { x: margin, y: size / 2 },
    { x: margin, y: (3 * size) / 4 },
    // Output layer
    { x: size - margin, y: size / 3 },
    { x: size - margin, y: (2 * size) / 3 }
  ];

  const initialEdges = initialNodes.slice(0, 3).flatMap(source =>
    initialNodes.slice(3).map(target => ({ source, target }))
  );

  return (
    <div className="flex justify-center w-full h-full">
      <svg
        ref={svgRef}
        style={{ width: '100%', height: '100%' }}
        viewBox={`0 0 ${size} ${size}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Initial static render for SSR */}
        {initialEdges.map((edge, i) => (
          <line
            key={i}
            x1={edge.source.x}
            y1={edge.source.y}
            x2={edge.target.x}
            y2={edge.target.y}
            stroke="#aaa"
            strokeWidth={2}
          />
        ))}
        {initialNodes.map((node, i) => (
          <circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={5}
            fill="#4299e1"
          />
        ))}
      </svg>
    </div>
  );
}

export default ConnectedNetwork;