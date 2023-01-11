import "./styles.scss";

import type { FC } from "react";
import React from "react";

const ComponentB: FC = (): JSX.Element => (
  <div className={"classB"}>{"Component B"}</div>
);

export { ComponentB };
