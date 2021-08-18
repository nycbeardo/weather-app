import React from 'react';
import Forecast from "./components/Forecast/Forecast";
import Logo from './components/logo/logo.js';

function App() {
  return (
    <div className="App  flex justify-center items-center bg-indigo-950">
    <div className="bg-indigo-950  shadow-2xl rounded-md border-solid border-4 border-gray-900">
      <header className="App-header">
        <Logo className=" " />
        <h1 className="font-bold text-white flex justify-center items-center ">Tailwindcaster</h1>
      </header>

      <main>
        <Forecast />
      </main>
      <footer className="font-light text-white text-xs flex justify-center items-center">
        Page created by "your name goes here" 
      </footer>
      </div>
    </div>
  );
}

export default App;