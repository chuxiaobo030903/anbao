import React, { useEffect } from "react";
import { _mobx } from '@/store/index';
import './index.less';

const Xtest: any = () => {
    useEffect(() => {
        console.log('首页index123456789',_mobx.xMobxValue);
    }, []);
    return <>
        <div className="xtest">
            test页面 {_mobx.xMobxValue}
        </div>
    </>
  };

  export default Xtest;
