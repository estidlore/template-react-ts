import ExampleComponent from "components/ExampleComponent";
import type {FC} from "react";
import React from "react";

const Home: FC = (): JSX.Element => (
  <div>
    <h1>Welcome to this template</h1>
    <ExampleComponent />
  </div>
);

export default Home;
