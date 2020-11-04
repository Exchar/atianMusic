/**
 *@auther: tang
 @Date: 2020-11-03
 *Project: netbaseMusic
 */
import React from "react"
import {getMusicDetail} from "../api/api";
import {Image} from "antd"
import "./MusicDetail.css"
import {observer,inject} from "mobx-react";
import {Link} from "react-router-dom"
@inject("musicStore")
@observer
class MusicDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            albumImg:"",
            lyric:"",
            songInfo:{},
            ids:"",
            albumInfo:{},
            singers:[]
        }
    }
    bindSinger(arr){
        console.log(arr)
        let singers = arr.map(item=>{
            return (
                <Link to={{pathname:`/singerDetail/${item.id}`}} key={item.id}>
                                    <span className="singerTitle" style={{marginRight:"6px",textShadow: "1px 2px 5px #cd1c1c",color:"#f1a8a8",fontWeight:"600"}}>
                    {item.name}
                </span>
                </Link>

            )
        })
        return singers
    }
    async componentWillMount() {
        console.log(this.props)
        await this.setState({
            ids:this.props.match.params.ids
        })
    //    发起axios请求
        let musicDetail = (await getMusicDetail({ids:this.state.ids}));
        this.setState({
            songInfo:musicDetail.songs[0],
            albumInfo:musicDetail.songs[0].al
        },()=>{
            //    保存背景图
            console.log(musicDetail.songs[0].al.picUrl)
            this.props.musicStore.backImg = musicDetail.songs[0].al.picUrl;
        //    调用生成歌手
            this.setState({
                singers:this.bindSinger(this.state.songInfo.ar)
            })
        })

    }
    async componentWillUnmount() {
        this.props.musicStore.backImg ="";
    }

    render() {
        let {songInfo,albumInfo} = this.state;
        console.log(songInfo)
        return (
            <div className="musicDetail">
                    {/*背景图*/}
                    <div className="backImg">
                        <Image src={albumInfo.picUrl}/>
                    </div>
                    <div className="musicDetailMain">
                    {/*顶部---标题，返回按钮*/}
                    <div className="topAction">
                        <div className="title">
                            <p>
                                {songInfo.name}
                            </p>
                        </div>
                        <p className="singer">
                            {this.state.singers}
                        </p>
                    </div>
                    {/*播放页的专辑盘旋转*/}
                    <div className="playAlbum">
                        <div className="outerAlbum" >
                            <Image src={albumInfo.picUrl}/>
                            <div className="innerAlbum">
                                <span>
                                    MUSIC
                                </span>
                            </div>
                        </div>
                    </div>
                    {/*    歌词*/}
                    <div className="lyric">

                    </div>
                    {/*    进度条*/}
                    <div className="progress">

                    </div>
                    {/*    操作按钮*/}
                    <div className="actionBtn">

                    </div>
                </div>
            </div>
        )
    }
}

export {MusicDetail as default}
