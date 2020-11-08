/**
 *@auther: tang
 *@Date: 2020-11-03
 *Project: netbaseMusic
 */
import {makeAutoObservable} from "mobx";
import * as data from "../api/api"

class MusicStore{
    constructor() {
        makeAutoObservable(this);
    }
    nowMusic = ""
    backImg = ""
    isPlaying=false
    autoPlay=false
    get backImg(){
        if (localStorage.getItem("backImg")){
            return localStorage.getItem("backImg")
        }
        return ""
    }
    set backImg(imgUrl){
        localStorage.setItem("backImg",imgUrl)
    }
    get autoPlay(){
        if (localStorage.getItem("autoPlay")){
            return localStorage.getItem("autoPlay")
        }
        return ""
    }
    set autoPlay(state){
        localStorage.setItem("autoPlay",state)
    }
    get isPlaying(){
        if (sessionStorage.getItem("isPlaying")){
            return JSON.parse(sessionStorage.getItem("isPlaying"))
        }
        return ""
    }
    set isPlaying(state){
        sessionStorage.setItem("isPlaying",JSON.stringify(state))
    }
    get nowMusic(){
        if (sessionStorage.getItem("nowMusic")){
            return sessionStorage.getItem("nowMusic")
        }
        return ""
    }
    set nowMusic(url){
        sessionStorage.setItem("nowMusic",url)
    }
     getMusicUrl(mid){
        console.log(mid);
        return new Promise((resolve, reject) => {
            data.getMusicUrl({id:mid}).then((res)=>{
                resolve(res)
            }).catch(e=>{
                reject(e)
            })
        })

    }
    playMusic(){
        this.isPlaying = true;
        console.log("播放")
    }
    pauseMusic(){
        this.isPlaying = false;
        console.log("暂停")
    }
}
export default MusicStore
