import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => <div>PageOne</div>;
const PageTwo = () => (
  <div>
    PageTwo
    <button class="btn">Click Me!</button>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
