import React from "react";
import ReactDOM from "react-dom/client"
import App from './App'
import './index.css'

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
       "SymbianOS", "Windows Phone",
       "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
       if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
       }
    }
    return flag;
 }

const root = ReactDOM.createRoot(document.getElementById('root'))

if(IsPC()){
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}else{
    root.render(
        <React.StrictMode>
            <h5>不支持的设备，请使用电脑打开</h5>
        </React.StrictMode>
    )
}



// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import store from "./components/redux/store";

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//     <BrowserRouter>
//          <React.StrictMode>
//             <App />
//         </React.StrictMode>
//     </BrowserRouter>
// )