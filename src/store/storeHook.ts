/**
 * @Description: store状态管理hook
 * @Author: Neo
 * @Date: 2021-12-21
 * @LastEditTime: 2022-01-06
 * @LastEditors: Neo
 */
import { useContext,createContext } from 'react'
import { observer } from 'mobx-react'
import {_mobx} from '@/store/index';

const useStore = ()=> {
    const storeContext = createContext(_mobx);
    const store = useContext(storeContext);
    return store;
}

export {
  observer, // 用于监听store数据的改变，同步到组件数据中
  useStore, // 用于获取store数据
}
