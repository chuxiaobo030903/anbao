import React from "react";
import ReactDOM from "react-dom";
import '@src/public/css/base.scss';
import '@src/public/iconfont/iconfont.css';
import './index.less';
import demoImg from '@src/public/imags/001.jpg'
const App = () => {
    console.log('123456789')
    return <>
    <h1 className="mt10 ml30 xxx">Hello World!</h1>
    <div className="xcol-box ml30">
        <div className="xflex">111111</div>
        <div className="xflex">2222222</div>
    </div>
    <div className="f30">
        <span className="zt-iconfont zt-caiwuguanli"></span>
    </div>
    <div className="mt30">
        <img src={demoImg} />
    </div>
    </>
}

ReactDOM.render(<App />,document.getElementById("root"));
