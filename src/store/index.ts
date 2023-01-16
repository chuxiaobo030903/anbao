// import { observable } from 'mobx'

// class $ {
//     @observable xMobxValue = '123';
// }
// export const _mobx = new $

import { makeAutoObservable,observable,action} from 'mobx'


class $ {
    xMobxValue:any= ''
    constructor () {
        this.xMobxValue = '123'
        makeAutoObservable(this)
    }

    async setXmobxValue (xMobxValue: any) {
        this.xMobxValue = xMobxValue || ''
    }

}
export const _mobx = new $
