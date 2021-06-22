import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

const pageOne = () => {
  return <div>pageOne</div>;
};

const pageTwo = () => {
  return <div>pageTwo</div>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={pageOne} />
          <Route path="/2" component={pageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};
//git working



export default App;
