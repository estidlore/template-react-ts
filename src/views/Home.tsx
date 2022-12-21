import type { FC } from "react";
import React from "react";

import { ComponentA, ComponentB } from "components";

const Home: FC = (): JSX.Element => (
  <div>
    <h2>{"Welcome to this template"}</h2>
    <ComponentA />
    <ComponentB />
  </div>
);

export { Home };
