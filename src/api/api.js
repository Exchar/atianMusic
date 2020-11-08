/**
 *@auther: tang
 *@Date: 2020-10-31
 *Project: netbaseMusic
 */
import server from './server';
import URL from "./serverApi.config";

//获取最新mv
export function getNewMvs(data){
    return server({
        url: URL.newMvs,
        method: 'get',
        dataType: "json",
        params: data
    })
}
//获取首页信息
export function getHomePageBlock(data){
    return server({
        url: URL.homePageBlock,
        method: 'get',
        dataType: "json",
        params: data
    })
}
//获取首页banner
export function getBanner(data){
    return server({
        url: URL.banner,
        method: 'get',
        dataType: "json",
        params: data
    })
}
//获取热门艺术家
export function getTopArtists(data){
    return server({
        url: URL.topArtists,
        method: 'get',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        params: data
    })
}
//获取mv详情
export function getMvDetail(data){
    return server({
        url: URL.mvDetail,
        method: 'get',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        params: data
    })
}
//获取mv点赞等详情
export function getMvDetailInfo(data){
    return server({
        url: URL.mvDetailInfo,
        method: 'get',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        params: data
    })
}
//获取mv的播放链接
export function getMvUrl(data){
    return server({
        url: URL.mvUrl,
        method: 'get',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        params: data
    })
}
//获取音乐详情
export function getMusicDetail(data){
    return server({
        url: URL.musicDetail,
        method: 'get',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        params: data
    })
}
//获取音乐url
export function getMusicUrl(data){
    return server({
        url: URL.musicUrl,
        method: 'get',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        params: data
    })
}
//获取音乐歌词
export function getMusicLyric(data){
    return server({
        url: URL.musicLyric,
        method: 'get',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        params: data
    })
}
//检查音乐是否可用
export function checkMusicIsAvai(data){
    return server({
        url: URL.musicIsAvai,
        method: 'get',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        params: data
    })
}
