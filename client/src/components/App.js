import React from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";

const pageOne = () => {
  return <div>pageOne
    <Link to="/2" >   Navigate to page 2</Link>
  </div>;
};

const pageTwo = () => {
  return <div >pageTwo
    <Link to="/" >   Navigate to page 1</Link>
  </div>;
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



export default App;
