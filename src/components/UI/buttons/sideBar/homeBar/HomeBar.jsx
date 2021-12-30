import React, { useEffect, useState } from "react";
import classes from "./HomeBar.module.css";

const HomeBar = ({ sTools, ...props }) => {
  useEffect(() => {
    const checkIfClickedOnOtherBar = (e) => {
      if (
        sTools.selectedElem &&
        sTools.refElem.current &&
        !sTools.refElem.current.contains(e.target)
      ) {
        sTools.setSelected({ home: false });
      }
    };
  });

  return (
    <section
      onClick={(e) => sTools.setSelectedElem({ home: true })}
      style={sTools.selectedElem.home ? sTools.sldStyle : null}
    >
      <i class="zmdi zmdi-home zmdi-hc-2x"></i>
      <p> Моя страница </p>
    </section>
  );
};

export default HomeBar;
