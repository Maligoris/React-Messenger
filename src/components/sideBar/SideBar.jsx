import React, { useState, useRef } from "react";
import classes from "./SideBar.module.scss";
import HomeBar from "../UI/buttons/sideBar/homeBar/HomeBar";
import MessagesBar from "../UI/buttons/sideBar/messagesBar/MessagesBar";
import FriendsBar from "../UI/buttons/sideBar/friendsBar/FriendsBar";
import SettingsBar from "../UI/buttons/sideBar/settingsBar/SettingsBar";

const SideBar = (props) => {
  const refElem = useRef();
  const [selectedElem, setSelectedElem] = useState({
    home: true,
    messages: false,
    friends: false,
    settings: false,
  });
  const sldStyle = {
    backgroundColor: "#373a42",
    color: "#1ca1c1",
    boxShadow: "inset 2px 0 #1ca1c1",
  };

  return (
    <div className={classes.sideBar}>
      <div className={classes.tree} ref={refElem}>
        <HomeBar
          sTools={{ sldStyle, selectedElem, setSelectedElem, refElem }}
        />
        <MessagesBar
          sTools={{ sldStyle, selectedElem, setSelectedElem, refElem }}
        />
        <FriendsBar 
          sTools={{ sldStyle, selectedElem, setSelectedElem, refElem }}
        />
        <SettingsBar 
          sTools={{ sldStyle, selectedElem, setSelectedElem, refElem }}
        />
      </div>
    </div>
  );
};

export default SideBar;
