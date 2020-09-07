import React, { memo, useState, useEffect, useContext } from "react";

import MapContext from '../../context/map/mapContext';

import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const MapChart = ({ setTooltipContent }) => {
  const mapContext = useContext(MapContext);

  const { getAllCountriesResult, data } = mapContext;

  useEffect(() => {
      getAllCountriesResult();
  }, []);


  return (
    <>
      <ComposableMap  data-tip="" projectionConfig={{ rotate: [0, 0, 0],
          scale: 160, }}>
          {data.length !== 0 && (
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const d = data.find((s) => {
                  return s
                    ? s.countryInfo.iso3 === geo.properties.ISO_A3 ||
                        s.countryInfo.iso2 === geo.properties.ISO_A2 ||
                        s.country === geo.properties.Name
                    : null;
                });
                return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    let cases = "";
                    let deaths = "";
                    if(d) {
                      cases = d["cases"].toLocaleString(undefined, {
                          maximumFractionDigits: 0,
                          minimumFractionDigits: 0,
                      });
                      deaths = d["deaths"].toLocaleString(undefined, {
                          maximumFractionDigits: 0,
                          minimumFractionDigits: 0,
                      });
                    }
                    setTooltipContent(`${NAME} — Cases : ${cases} | Deaths : ${deaths}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent();
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />)
            })
            }
          </Geographies>)}
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);