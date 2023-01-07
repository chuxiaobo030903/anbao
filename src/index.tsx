import React, { memo } from "react";
import ReactDOM from 'react-dom/client';
import { HashRouter,Router,Routes} from 'react-router-dom';
import RouteTable from "./router";
import '@/public/css/base.scss';
import '@/public/iconfont/iconfont.css';


const App =  memo(() => {
    return <RouteTable />
});

const root: any = document.getElementById('root');
ReactDOM.createRoot(root).render(
    <HashRouter>
        <App/>
    </HashRouter>
);
