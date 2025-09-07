import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './RoutingView/home';
import About from './RoutingView/about';
import Contact from './RoutingView/contact';
import {MyfavoriteColor, Car} from './hooks';
import {TimerComponent, Counter} from './hooks/useEffect';
import {Component} from './hooks/useContext/Component';
import ComponentRef from './hooks/useRef';
import MyReducerComponent from './hooks/useReducer';
import UseCallbackExample from './hooks/useCallback';
//import { Component} from ''

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/hooks">Hooks</Link> |{" "}
        <Link to="/car">Car</Link> |{" "}
        <Link to="/timer">Timmer</Link> |{" "}
        <Link to="/counter">Counter</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about123" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hooks" element={<MyfavoriteColor />} />
        <Route path="/car" element={<Car />} />
        <Route path="/timer" element={<TimerComponent />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/userContext" element={<Component></Component>} ></Route>
        <Route path="/userRef" element={<ComponentRef></ComponentRef>} ></Route>
        <Route path="/useReducer" element={<MyReducerComponent></MyReducerComponent>}></Route>
        <Route path="/useCallback" element={<UseCallbackExample />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
