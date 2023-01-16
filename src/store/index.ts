
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'
class $ {
    constructor () {
        makeAutoObservable(this);
    }
    xMobxValue:string = '初始化mobx变量值';
    setXmobxValue = (value: string) => {
        this.xMobxValue = value;
    }

}
const _mobx = new $
export {_mobx,observer}
