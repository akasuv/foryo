import { ReactComponentElement, ReactElement } from "react";

export interface ForYoElement {
  name: string;
  type: string;
  icon: string;
  id: string;
  render(): ReactElement<any>;
}

export interface BlockTemplate {
  id: string;
  type: string;
  props: { children?: any[]; image?: string; style?: {} };
}

export interface AnchorBlock {
  index: number;
  position: "above" | "below";
}
