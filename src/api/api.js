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
        data: data
    })
}

//获取热门艺术家
export function getTopArtists(data){
    return server({
        url: URL.topArtists,
        method: 'get',
        dataType: "json",
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        data: data
    })
}
