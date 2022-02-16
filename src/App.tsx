import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';
import {Header} from "./components/header";
import {ItemsList} from "./features/items";
import {Cart} from "./features/cart";

export const itemsData = [
    {
        id: 545484,
        imgUrl: '',
        altName: 'some product',
        title: 'Samsung S21',
        description: 'some description',
        price: 25000
    },
    {id: 545589, imgUrl: '', altName: 'some product', title: 'Apple X', description: 'some description', price: 45000},
    {
        id: 5457874,
        imgUrl: '',
        altName: 'some product',
        title: 'Honor M21',
        description: 'some description',
        price: 15000
    },
]
export const PATH = {
    MAIN: '/',
    CART: '/cart'
}

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={PATH.MAIN} element={<ItemsList/>}/>
                <Route path={PATH.CART} element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <Counter />
//   <p>
//     Edit <code>src/App.tsx</code> and save to reload.
//   </p>
//   <span>
//           <span>Learn </span>
//           <a
//               className="App-link"
//               href="https://reactjs.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//               className="App-link"
//               href="https://redux.js.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//               className="App-link"
//               href="https://redux-toolkit.js.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//               className="App-link"
//               href="https://react-redux.js.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
// </header>
