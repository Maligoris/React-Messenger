import React, { useEffect, useState } from "react";
import classes from "./MessagesBar.module.css";

const MessagesBar = ({ sTools, ...props }) => {
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
      onClick={(e) => sTools.setSelectedElem({ messages: true })}
      style={sTools.selectedElem.messages ? sTools.sldStyle : null}
    >
      <i class="zmdi zmdi-comments zmdi-hc-2x"></i>
      <p>Сообщения </p>
    </section>
  );
};

export default MessagesBar;
