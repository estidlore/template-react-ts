import "./styles.scss";

import type { FC } from "react";
import React from "react";

const ComponentA: FC = (): JSX.Element => (
  <div className={"classA"}>{"Component A"}</div>
);

export { ComponentA };
