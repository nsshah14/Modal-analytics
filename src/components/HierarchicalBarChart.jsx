import React, { useRef, useEffect } from "react";
import BarChartHierarchy from "./BarChartHierarchy.js";
import PropTypes from "prop-types";


const BarchartHierarchyWrapper = props => {
  const targetRef = useRef(null);

  useEffect(() => {
    const bh = BarChartHierarchy(targetRef.current);
    bh.update(props.data);
  }, []);
  
  console.log("bh render", props.data);
  return (
    <div className="BarchartHierarchyWrapper">
      <div ref={targetRef}></div>
    </div>
  );
};

BarchartHierarchyWrapper.propTypes = {
  data: PropTypes.object.isRequired
};

export default BarchartHierarchyWrapper;
