import React, { useEffect } from "react";
import demoImg from '@/public/imags/001.jpg';
import './index.less';
import { useNavigate } from 'react-router-dom';
import { byDateTime } from '@/utils/axios'
import { NToXtest } from '@/utils/navigator'

const Index: any = () => {
    // const navigate = useNavigate();
    useEffect(() => {
        pageInit()
        console.log('首页index123456789');
    }, []);

    const pageInit = async()=>{
        let out:any = await byDateTime({dateTime:"2022-12-09"});
        console.log('cxb2222',out);
    }

    return <>
        <div className="mt10 xindex">首页
            <div className="xcol-box">
                <div className="xflex" onClick={()=>{NToXtest()}}>goto Xtest</div>
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
