// import React from 'react'

// const home = () => {
//   return (
//     <div>home</div>
//   )
// }

// export default home

import React, { useEffect } from "react";

const Neo4jDataVisualization = () => {
  useEffect(() => {
    draw();
  }, []);

  const draw = () => {
    // The script relies on global variables (like NeoVis) which are not recommended in React.
    // We can include the script inside the useEffect and append it to the document instead.
    const script = document.createElement("script");
    script.src = "https://unpkg.com/neovis.js@2.0.2";
    script.async = true;
    script.onload = () => initializeNeoVis();
    document.body.appendChild(script);
  };

  const initializeNeoVis = () => {
    // The NeoVis constructor is not accessible directly in React, so we need to use the 'window' object.
    const NeoVis = window.NeoVis;

    const config = {
      containerId: "viz",
      neo4j: {
        serverUrl: "neo4j://c70e63e0.databases.neo4j.io",
        serverUser: "neo4j",
        serverPassword: "WSFSUjT4_inmBV4eY58XbJyUaCaZikZclQfUe3J42LE",
        driverConfig: {
          encrypted: "ENCRYPTION_ON",
          trust: "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES",
        },
      },
      labels: {
        User: {
          label: "name",
          [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
            static: {
              color: "orange",
              shape: "dot",
              value: 10,
              font: {
                color: "black",
                background: "none",
                strokeWidth: "0",
                size: "15",
              },
            },
            function: {
              title: NeoVis.objectToTitleHtml,
            },
          },
        },
      },
      relationships: {
        KNOWS: {
          color: {
            highlight: "blue",
            hover: "red",
          },
          value: "weight",
        },
      },
      arrows: true,
      initialCypher: "MATCH p=()-[:KNOWS]->()  MATCH (n: User) RETURN p,n",
    };

    const neoViz = new NeoVis.default(config);
    neoViz.render();
  };

  return (
    <div style={{ backgroundColor: "#176B87" }}>
      <div id="viz" style={{ width: "1500px", height: "733px" }}></div>
    </div>
  );
};

export default Neo4jDataVisualization;
