import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { BrowserRouter} from "react-router-dom";
import Chat from "./components/Chat";
import store from "./store";
import {Provider} from "react-redux";
// store.subscribe(()=>console.log(store.getState()));

// ReactDOM.render(
//                 <>
//                 <React.StrictMode>
//          <BrowserRouter>
//      <App/>
//   </BrowserRouter>
//   </React.StrictMode>,
//         </>,document.getElementById("root"));
        

        ReactDOM.render(
        <>
<React.StrictMode>
<BrowserRouter>
<Provider store={store}>
<Chat/>
</Provider>
</BrowserRouter>
</React.StrictMode>
</>
,document.getElementById("root"));