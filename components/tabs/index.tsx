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
  children: ReactElement<TabChildProps>[]; // Array of React elements with specific props
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
        {children.map((child: ReactElement<TabChildProps>) => {
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
        {children.map((child: ReactElement<TabChildProps>) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </ST.TabContent>
    </ST.Tabs>
  );
};

export default Tabs;
