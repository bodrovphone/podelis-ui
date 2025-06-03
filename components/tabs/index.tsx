import React, { useState } from "react";
import Tab from "./tab";

import ST from "./styles";
import { ReactElement, ReactNode } from 'react';

interface TabChildProps {
  label: string;
  children: ReactNode;
  [key: string]: any;
}

interface TabsProps {
  children: ReactElement<any>[]; // Changed to ReactElement<any>[]
  [key: string]: any;
}

interface TabsState {
  activeTab: string;
}

const Tabs = (props: TabsProps) => {
  const [state, setState] = useState<TabsState>({
    activeTab: props.children[0].props.label,
  });

  const { children } = props;
  const { activeTab } = state;

  const onClickTabItem = (tab: string) => {
    setState({ activeTab: tab });
  };

  return (
    <ST.Tabs {...props}>
      <ST.TabList>
        {/* Type assertion for child might be needed if TS still complains after props change */}
        {children.map((child) => {
          const { label } = (child.props as TabChildProps); // Accessing props safely

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
        {/* Type assertion for child might be needed */}
        {children.map((child) => {
          if ((child.props as TabChildProps).label !== activeTab) return undefined;
          return (child.props as TabChildProps).children;
        })}
      </ST.TabContent>
    </ST.Tabs>
  );
};

export default Tabs;
