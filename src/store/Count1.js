/**
 *@auther: tang
 *@Date: 2020-11-02
 *Project: netbaseMusic
 */
import {makeAutoObservable} from "mobx"

class Count1 {
    constructor() {
        makeAutoObservable(this);
    }
    num1 = 10;

    addNum1() {
        this.num1++;
    }
    radNum1(){
        this.num1--;
    };

}
export default Count1;
