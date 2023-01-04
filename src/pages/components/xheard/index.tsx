import React from 'react';
import { Outlet } from 'react-router-dom'
import './index.less';

const xheard: any = (props:any)=> {
  return <>
        <div className="zt-layouts">
            <div className="zt-layouts-title ">公共顶部导航栏</div>
            <Outlet />
        </div>
    </>
};

export default xheard;
