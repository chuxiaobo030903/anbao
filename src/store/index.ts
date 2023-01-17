
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'
class $ {
    constructor () {
        makeAutoObservable(this);
    }
    xMobxValue:string = '初始化mobx变量值';
    setXmobxValue = (value: string) => {
        console.log('可以进行ajx请求方法!');
        this.xMobxValue = value;
    }

}
const _mobx = new $
export {_mobx,observer}
