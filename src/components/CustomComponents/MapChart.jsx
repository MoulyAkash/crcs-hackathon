import React, { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";

import { stateWiseList } from "../../data/data";

import statesMap from "../../assets/maps/india-states.json";

const colorScale = scaleLinear().domain([1, 601]).range(["#e6e9ff", "#2938bc"]);

const MapChart = ({ setTooltipContent }) => {
  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-30, -30, 0],
        scale: 550,
      }}
      style={{ width: "100%" }}
    >
      {/* <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
    <Graticule stroke="#E4E5E6" strokeWidth={0.5} /> */}
      <Geographies geography={statesMap}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const d = stateWiseList.find((s) => s.id === geo.rsmKey);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  setTooltipContent(`${geo.properties.NAME_1}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                data-tip=""
                data-tooltip-id="my-tooltip"
                data-tooltip-content={`${geo.properties.NAME_1} ${d.societyNum}`}
                data-tooltip-place="top"
                style={{
                  hover: {
                    fill: "#2938bc",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#2938bc",
                    outline: "none",
                  },
                }}
                fill={d ? colorScale(d.societyNum) : "#F5F4F6"}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
