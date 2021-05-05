import React from 'react';

import Forecast from "./components/Forecast/Forecast";
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className="App  flex justify-center items-center  ">
    <div className="bg-green-800  shadow-2xl rounded-lg">
      <header className="App-header">
        <Logo className=" " />
        <h1 className="font-bold ">React Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer className="font-bold">
        Page created by "your name goes here" 
      </footer>
      </div>
    </div>
  );
}

export default App;