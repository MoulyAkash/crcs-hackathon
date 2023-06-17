import React, { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";
import { Row, Col } from "reactstrap";

import { stateWiseList } from "../../data/data";

import statesMap from "../../assets/maps/india-states.json";
import MapBarChart from "./MapBarChart";

const colorScale = scaleLinear().domain([1, 601]).range(["#609966", "#EDF1D6"]);

const MapStat = () => {
  const [dataSeries, setDataSeries] = useState([380, 584, 780, 1100, 1365]);

  const generateSequentialArray = () => {
    const minStep = 1;
    const maxStep = 100; // Adjust this value to control the sequential range
    const arrayLength = 5;
    const minValue = 300;
    const maxValue = 1500;

    const sequentialArray = [];
    let previousNumber =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    sequentialArray.push(previousNumber);

    for (let i = 1; i < arrayLength; i++) {
      const randomStep =
        Math.floor(Math.random() * (maxStep - minStep + 1)) + minStep;
      const nextNumber = previousNumber + randomStep;
      const sequentialNumber = Math.min(nextNumber, maxValue);

      sequentialArray.push(sequentialNumber);
      previousNumber = sequentialNumber;
    }

    setDataSeries(sequentialArray);
  };

  return (
    <Row
      style={{
        alignItems: "center",
        position: "relative",
      }}
    >
      <Col lg={5}>
        <ComposableMap
          projectionConfig={{
            rotate: [-34, -30, 0],
            scale: 500,
          }}
          style={{ width: "100%" }}
        >
          <Geographies geography={statesMap}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d = stateWiseList.find((s) => s.id === geo.rsmKey);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    data-tooltip-id="map-stat"
                    data-tooltip-content={geo.properties.NAME_1}
                    data-tooltip-place="top"
                    onClick={generateSequentialArray}
                    style={{
                      hover: {
                        fill: "#BBD6B8",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#BBD6B8",
                        outline: "none",
                      },
                    }}
                    fill={d ? colorScale(d.societyNum) : "#395144"}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </Col>

      <Col
        lg={7}
        style={{
          minHeight: "250px",
          maxHeight: "300px",
        }}
      >
        <MapBarChart dataSeries={dataSeries} />
      </Col>
    </Row>
  );
};

export default MapStat;
