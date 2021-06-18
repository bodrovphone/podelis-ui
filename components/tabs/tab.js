import React, { Component, useState } from "react";
import ST from "./styles";

const Tab = (props) => {
  const { activeTab, label } = props;
  const onClick = () => {
    const { label, onClick } = props;
    onClick(label);
  };

  return (
    <ST.TabListItem onClick={onClick} active={activeTab === label}>
      {label}
    </ST.TabListItem>
  );
};

export default Tab;
