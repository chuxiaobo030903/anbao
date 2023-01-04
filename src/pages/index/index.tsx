import React, { useEffect } from "react";
import demoImg from '@src/public/imags/001.jpg';
import './index.less';
import { useNavigate } from 'react-router-dom';


const Index: any = () => {
    const navigate = useNavigate();
    useEffect(() => {
        console.log('首页index123456789');
    }, []);

    return <>
        <div className="mt10 xindex">首页
            <div className="xcol-box">
                <div className="xflex" onClick={() => navigate('/xtest')}>goto Xtest</div>
                <div className="xflex">2222222</div>
            </div>
            <div className="f30">
                <span className="zt-iconfont zt-caiwuguanli"></span>
            </div>
            <div className="mt30">
                <img src={demoImg} />
            </div>
        </div>
    </>
  };

  export default Index;
