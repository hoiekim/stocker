import { ReactNode } from "react";
import * as types from ".";

export interface HasChildren {
  children?: ReactNode | ReactNode[];
}

export interface HasCustomRef {
  customRef?: types.CustomRef;
}
