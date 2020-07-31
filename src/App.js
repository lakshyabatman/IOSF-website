import React from 'react';
import Header from "./components/Header/Header";
import LearningPaths from "./components/LearningPaths/LearningPaths";
import Bootcamps from "./components/Bootcamps/Bootcamps";
import Contribute from "./components/Contribute/Contribute";
import AppFooter from './components/Footer/AppFooter';

function App() {
  return (
    <div className="App">
      <Header />
      <LearningPaths />
      <Bootcamps />
      <Contribute />
      <AppFooter />
    </div>
  );
}

export default App;
