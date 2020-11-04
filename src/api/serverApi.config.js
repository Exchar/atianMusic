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

const HISTORY= 'http://localhost:9000';
const URL ={
    homePageBlock:HISTORY+"/homepage/block/page", //首页部分信息
    banner:HISTORY+"/banner",//首页banner
    newAlbum:HISTORY+'/top/album',//新碟上架
    newEst:HISTORY+'/album/newest', //最新专辑
    topArtists:HISTORY+'/top/artists', //最热歌手
    newMvs:HISTORY+'/mv/first', //最新mv
    videoDetail:HISTORY+'/video/detail', //获取视频详情
    videoUrl:HISTORY+'/video/url', //获取视频的链接
    videoDetailInfo:HISTORY+'/video/detail/info', //获取视频的评论等详情
    mvDetail:HISTORY+'/mv/detail', //获取视频详情
    mvUrl:HISTORY+'/mv/url', //获取视频的链接
    mvDetailInfo:HISTORY+'/mv/detail/info', //获取视频的评论等详情
    musicDetail:HISTORY+"/song/detail"
}
export default URL
