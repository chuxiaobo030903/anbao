import React, { memo } from "react";
import ReactDOM from 'react-dom/client';
import { useRoutes,BrowserRouter,HashRouter} from 'react-router-dom';
import routes from "./router";
import '@src/public/css/base.scss';
import '@src/public/iconfont/iconfont.css';


// const App = memo(() => {
//     const elements = useRoutes(routes)
//     console.log('elements123',elements)
//     return elements
// })
const App = ()=>{
    const elements = useRoutes(routes)
    console.log('elements123',elements)
    return elements
}

const root: any = document.getElementById('root');
ReactDOM.createRoot(root).render(
    // <React.StrictMode></React.StrictMode>
    <HashRouter><App/></HashRouter>
);
