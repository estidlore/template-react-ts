import "./styles.scss";

import type { FC } from "react";
import React from "react";

import { ComponentA, ComponentB } from "components";

const Home: FC = (): JSX.Element => (
  <div>
    <p className={"welcome"}>{"Welcome to this template"}</p>
    <ComponentA />
    <ComponentB />
  </div>
);

export { Home };
