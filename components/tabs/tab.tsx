import React, { Component, useState } from "react";
import ST from "./styles";

interface TabProps {
  activeTab: string;
  label: string;
  onClick: (label: string) => void;
  [key: string]: any; // For any other potential props passed to ST.TabListItem
}

const Tab = (props: TabProps) => {
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
