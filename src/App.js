import React from 'react';
import Forecast from "./components/Forecast/Forecast";
import Logo from './components/logo/logo.js';

function App() {
  return (
    <div className="App  flex justify-center items-center bg-indigo-940 p-8">
    <div className=" bg-indigo-950 shadow-3xl rounded-md border-none border-4 border-indigo-950">
      <header className="App-header">
        <Logo className=" " />
        <h1 className="font-bold text-white flex justify-center items-center ">Tailwindcaster</h1>
      </header>

      <main>
        <Forecast />
      </main>
      <footer className="font-light text-white text-xs flex justify-center items-center p-3">
     
      </footer>
      
      </div>
    </div>
  );
}

export default App;