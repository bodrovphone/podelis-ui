import styled from "styled-components";
import { device } from "../../styles/media";

export const Tabs_ST = styled.div``;

export const TabList_ST = styled.ol`
  border-radius: 0 10px 0 10px;
  padding-left: 0;
`;

export const TabContent_ST = styled.div``;

export const TabListItem_ST = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
  color: ${(props) => props.theme.colors.paper};
  border-radius: 0 10px 0 10px;

  ${({ active, theme }) =>
    active &&
    `
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    color: ${theme.colors.rareMedium};
    background-color: white;
    border-width: 1px 1px 0 1px;
  `}
`;
