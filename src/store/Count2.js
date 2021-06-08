/**
 *@auther: tang
 *@Date: 2020-11-02
 *Project: netbaseMusic
 */
import {makeAutoObservable} from "mobx"

class Count2 {
    constructor() {
        makeAutoObservable(this)
    }
    num2 = 10;
    addNum2() {
        this.num2++
    }
    radNum2() {
        this.num2--
    }
}
export  default Count2
