import React, { useEffect, useState } from "react";
import classes from "./SettingsBar.module.scss";

const SettingsBar = ({ sTools, ...props }) => {
  useEffect(() => {
    const checkIfClickedOnOtherBar = (e) => {
      if (
        sTools.selectedElem &&
        sTools.refElem.current &&
        !sTools.refElem.current.contains(e.target)
      ) {
        sTools.setSelected({ settings: false });
      }
    };
  });

  return (
    <section
      onClick={(e) => sTools.setSelectedElem({ settings: true })}
      style={sTools.selectedElem.settings ? sTools.sldStyle : null}
    >
      <i class="zmdi zmdi-settings zmdi-hc-2x"></i>
      <p>Настройки </p>
    </section>
  );
};

export default SettingsBar;
