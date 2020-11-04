/**
 *@auther: tang
 *@Date: 2020-11-03
 *Project: netbaseMusic
 */
import {makeAutoObservable} from "mobx";
class MusicStore{
    backImg
    get backImg(){
        if (localStorage.getItem("backImg")){
            return localStorage.getItem("backImg")
        }
        return ""
    }
    set backImg(imgUrl){
        localStorage.setItem("backImg",imgUrl)
    }
}
export default MusicStore
