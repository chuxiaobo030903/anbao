
import { makeAutoObservable } from 'mobx'
class $ {
    constructor () {
        makeAutoObservable(this);
    }
    xMobxValue:string = '初始化mobx变量值';
    async setXmobxValue (value: string) {
        this.xMobxValue = value;
    }

}
export const _mobx = new $
