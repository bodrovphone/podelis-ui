import React, { Component, useState } from "react";
import { TabListItem_ST } from "./styles";

const Tab = (props) => {
  const { activeTab, label } = props;
  const onClick = () => {
    const { label, onClick } = props;
    onClick(label);
  };

  return (
    <TabListItem_ST onClick={onClick} active={activeTab === label}>
      {label}
    </TabListItem_ST>
  );
};

export default Tab;
