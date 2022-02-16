import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';
import {Header} from "./components/header";
import {ItemsList} from "./features/items";
import {CartPage} from "./features/cart/CartPage";


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
                <Route path={PATH.CART} element={<CartPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

export type ItemType = {
    id: number
    imgUrl: string
    altName: string
    title: string
    description: string
    price: number
}

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
