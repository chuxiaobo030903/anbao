import React, { useEffect } from "react";

import { observable } from 'mobx'
// import { SearchOutlined,ReloadOutlined} from '@ant-design/icons'
// import { message,Input } from 'antd';
import './index.less';
import {observer,useStore} from '@/store/storeHook';
// import {_mobx } from '@/store/index';
import { ajxDemo } from '@/utils/axios'
import { useToPage } from '@/utils/navigateHook'

// const { Search } = Input
const Index: any = () => {
    const _mobx = useStore();
    const {NToXtest,NToLogin} = useToPage();
    useEffect(() => {
        pageInit()
        console.log('首页index123456789',_mobx.xMobxValue);
    }, []);

    const pageInit = async()=>{
        let out:any = await ajxDemo({dateTime:"2022-12-09"});
        console.log('cxb2222',out);
    }

    return <>
        <div className="mt10 xindex">首页 {_mobx.xMobxValue}
            <div className="xcol-box">
                <div className="xflex" onClick={()=>{NToXtest()}}>goto Xtest</div>
                <div className="xflex mt30 mb30" onClick={()=>{NToLogin()}}>goto login</div>
                <div className="xflex" onClick={()=>{_mobx.setXmobxValue('cxb777777777')}}>2222222</div>
                {/* <div className="xflex" onClick={()=>{_mobx.xMobxValue= 'cxb777777777'}}>2222222</div> */}
            </div>
            <div className="f30">
                <span className="zt-iconfont zt-caiwuguanli"></span>
            </div>
            {/* <div className="ml30 mt30 f30" >
                <SearchOutlined />
                <ReloadOutlined className="ml30" />
            </div>
            <Search className="mt30" style={{ width: '200px', height: '32px', marginLeft: '40px'}}
                onSearch={()=>{
                    message.error('测试andt是否加载成功！');
                    console.log('cxb000000000')
                }}
              /> */}
        </div>
    </>
};

export default observer(Index);

// export default Index;
