/**
 *@auther: tang
 *@Date: 2020-10-31
 *Project: netbaseMusic
 */

/***
 *
 *统一定义接口，有利于维护
 *
 **/

const HISTORY= 'http://localhost:8888';
const URL ={
    newAlbum:HISTORY+'/top/album',//新碟上架
    newEst:HISTORY+'/album/newest', //最新专辑
    topArtists:HISTORY+'/top/artists', //最热歌手
    newMvs:HISTORY+'/mv/first' //最新mv
}
export default URL
