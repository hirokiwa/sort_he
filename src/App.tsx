import React, {useState}from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './page/home/Home';
import Game from './page/game/Game';
import Result from './page/result/Result';

const App = () => {
  const [point, setPoint] = useState<number>(0)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home setPoint={setPoint}/>} />
          <Route path={`/game`} element={<Game point={point} setPoint={setPoint}/>} />
          <Route path={`/result`} element={<Result point={point}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
