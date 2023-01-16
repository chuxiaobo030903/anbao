import React, { memo } from "react";
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import Route from "./router";
import '@/public/css/base.scss';
import '@/public/iconfont/iconfont.css';
// import 'antd/dist/antd.css';
const App =  memo(() => {
    return <Route />
});

const root: any = document.getElementById('xroot');
ReactDOM.createRoot(root).render(
    <HashRouter>
        <App/>
    </HashRouter>
);
