import React, { useEffect } from "react";
// import { SearchOutlined,ReloadOutlined} from '@ant-design/icons'
// import { message,Input } from 'antd';
import './index.less';
import { ajxDemo } from '@/utils/axios'
import { useToPage } from '@/utils/navigateHook'

// const { Search } = Input

const Index: any = () => {
    const {NToXtest,NToLogin} = useToPage();
    useEffect(() => {
        pageInit()
        console.log('首页index123456789');
    }, []);

    const pageInit = async()=>{
        let out:any = await ajxDemo({dateTime:"2022-12-09"});
        console.log('cxb2222',out);
    }

    return <>
        <div className="mt10 xindex">首页
            <div className="xcol-box">
                <div className="xflex" onClick={()=>{NToXtest()}}>goto Xtest</div>
                <div className="xflex mt30 mb30" onClick={()=>{NToLogin()}}>goto login</div>
                <div className="xflex">2222222</div>
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

export default Index;
