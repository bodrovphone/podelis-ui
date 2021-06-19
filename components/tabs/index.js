import React, { useState } from "react";
import Tab from "./tab";

import ST from "./styles";

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
    <ST.Tabs>
      <ST.TabList>
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
      </ST.TabList>
      <ST.TabContent>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </ST.TabContent>
    </ST.Tabs>
  );
};

export default Tabs;
