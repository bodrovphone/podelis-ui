import React, { useState } from "react";
import Tab from "./tab";

import { Tabs_ST, TabList_ST, TabContent_ST } from "./styles";

const Tabs = (props) => {
  const [state, setState] = useState({
    activeTab: props.children[0].props.label,
  });

  const { children } = props;
  const { activeTab } = state;

  const onClickTabItem = (tab) => {
    setState({ activeTab: tab });
  };

  return (
    <Tabs_ST>
      <TabList_ST>
        {children.map((child) => {
          const { label } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </TabList_ST>
      <TabContent_ST>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </TabContent_ST>
    </Tabs_ST>
  );
};

export default Tabs;
