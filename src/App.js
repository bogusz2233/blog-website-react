import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

import BlogContainers from "./containers/BlogContainers/BlogContainers";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BlogContainers/>
      </BrowserRouter>
    );
  }
}

export default App;
