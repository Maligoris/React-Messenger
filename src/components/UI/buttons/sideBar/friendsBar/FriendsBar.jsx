import React, { useEffect, useState } from "react";
import classes from "./FriendsBar.module.css";

const FriendsBar = ({ sTools, ...props }) => {
  useEffect(() => {
    const checkIfClickedOnOtherBar = (e) => {
      if (
        sTools.selectedElem &&
        sTools.refElem.current &&
        !sTools.refElem.current.contains(e.target)
      ) {
        sTools.setSelected({ friends: false });
      }
    };
  });

  return (
    <section
      onClick={(e) => sTools.setSelectedElem({ friends: true })}
      style={sTools.selectedElem.friends ? sTools.sldStyle : null}
    >
      <i class="zmdi zmdi-accounts-outline zmdi-hc-2x"></i>
      <p>Друзья</p>
    </section>
  );
};
export default FriendsBar;
