import React from 'react';

import Forecast from "./components/Forecast/Forecast";
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className="App  flex justify-center items-center ">
    <div className="bg-green-800  shadow-2xl rounded-lg border-solid border-4 border-green-800 ">
      <header className="App-header">
        <Logo className=" " />
        <h1 className="font-bold text-white flex justify-center items-center ">React Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer className="font-bold text-white">
        Page created by "your name goes here" 
      </footer>
      </div>
    </div>
  );
}

export default App;