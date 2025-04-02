import React, { useEffect, useRef, useState } from "react";
import { Graph, treeToGraphData } from "@antv/g6";

interface TreeNode {
  id: string;
  children?: TreeNode[];
}

function isLeafNode(d: any) {
  return !d.children || d.children.length === 0;
}

const DendrogramTree: React.FC<{
  data: TreeNode
}> = (data) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [graph, setGraph] = useState<Graph | null>(null)
  useEffect(() => {
    const graph = new Graph({
      // width: '100%',
      container: containerRef.current!,
      height: 600,
      autoFit: 'view',
      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element', 'collapse-expand'],
      node: {
        // style: (d) => {
        //   const style: any = {
        //     labelText: d.id,
        //     labelPlacement: 'right',
        //     labelOffsetX: 2,
        //     labelBackground: true,
        //     ports: [{ placement: 'top' }, { placement: 'bottom' }],
        //   };
        //   if (isLeafNode(d)) {
        //     Object.assign(style, {
        //       labelTransform: [
        //         ['rotate', 90],
        //         ['translate', 18],
        //       ],
        //       labelBaseline: 'center',
        //       labelTextAlign: 'left',
        //     });
        //   }
        //   return style;
        // },
        animation: {
          enter: false,
        },
      },
      data: {
        edges: [],
        nodes: []
      },
      edge: {
        type: 'cubic-vertical',
        animation: {
          enter: false,
        },
      },
      layout: {
        type: 'dendrogram',
        direction: 'TB', // H / V / LR / RL / TB / BT
        nodeSep: 50,
        rankSep: 120,
      },
    });
    setGraph(graph)
  }, []);

  useEffect(() => {
    if (data && graph) {
      console.log(treeToGraphData(data.data))
      graph.clear().then(() => {
        graph.addData(treeToGraphData(data.data))
        graph.render().then(() => {
        });
      })
    }
  }, [data, graph]);
  return (
    <div
      ref={ containerRef }
      style={{
        width: '100%',
        height: '100%',
      }}
    ></div>
  )
}

export default DendrogramTree;
