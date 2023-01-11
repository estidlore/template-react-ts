import type { FC } from "react";
import React from "react";

import { Home } from "views/Home";

const App: FC = (): JSX.Element => (
  <div>
    <h1>{"Template React TS SASS"}</h1>
    <Home />
  </div>
);

export { App };
