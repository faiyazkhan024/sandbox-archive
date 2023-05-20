import { FC, ReactNode } from "react";

export interface MC {
  menu?: Array<MultiLevelDropdown>;
  addMenu?: (menu: MenuPayload) => void;
}

export type MCP = FC<{ children: ReactNode }>;

export interface MenuPayload {
  name: string;
  parentID: string;
}

interface MenuAction {
  type: string;
  payload?: MenuPayload;
}

export type MenuReducer = (
  state: MultiLevelDropdown[],
  action: MenuAction
) => Array<MultiLevelDropdown>;

export type RecursiveAddMenu = (
  menuList: Array<MultiLevelDropdown>,
  parentID: string,
  newMenu: MultiLevelDropdown
) => Array<MultiLevelDropdown>;
