import { ReactNode } from "react";
import * as types from ".";

export interface HasChildren {
  children?: ReactNode | ReactNode[];
}

export interface HasRef {
  customRef?: types.CustomRef;
}
