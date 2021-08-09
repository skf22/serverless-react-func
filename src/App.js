import { Fragment } from "react";
import Airtable from "./Airtable";
import Basic from "./Basic";

const App = () => {
  return (
    <Fragment>
      <Basic />
      <Airtable />
    </Fragment>
  );
};

export default App;
