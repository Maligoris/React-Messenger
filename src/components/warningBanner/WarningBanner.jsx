import React from "react";

const WarningBanner = (props) => {
  return (
    (props.IsEmpty === true) 
    ? <div className="warning">Введите сообщение</div>
    : null
  )
};

export default WarningBanner;
