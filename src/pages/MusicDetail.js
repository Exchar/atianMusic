/**
 *@auther: tang
 @Date: 2020-11-03
 *Project: netbaseMusic
 */
import React from "react"
import {getMusicDetail} from "../api/api"
import {Image} from "antd"
import "./MusicDetail.scss"
import {observer, inject} from "mobx-react"
import {Link} from "react-router-dom"
import * as Icon from "@ant-design/icons"
import {message} from "antd"
@inject("musicStore")
@observer
class MusicDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            albumImg: "",
            lyric: "",
            songInfo: {},
            ids: "",
            albumInfo: {},
            singers: [],
            isPlaying: JSON.parse(sessionStorage.getItem("isPlaying"))
        }
    }
    playMusic(id) {
        if (!sessionStorage.getItem("nowMusic")) {
            this.props.musicStore.getMusicUrl(id).then(res => {
                let url = res.data[0].url
                console.log(url)
                this.props.musicStore.nowMusic = url
            }).catch(e => {
                message.error("发生了未知错误")
            })
        }
        if (this.state.isPlaying) {
            this.setState({
                isPlaying: false
            }, () => {
                this.props.musicStore.pauseMusic()
            })
        }else{
            this.setState({
                isPlaying: true
            }, () => {
                this.props.musicStore.playMusic()
            })
        }
    }
    bindSinger(arr) {
        let singers = arr.map(item => {
            return (
                <Link to={{pathname: `/singerDetail/${item.id}`}} key={item.id}>
                                    <span className="singerTitle" style={{marginRight: "6px", textShadow: "1px 2px 5px #cd1c1c", color: "#f1a8a8", fontWeight: "600"}}>
                    {item.name}
                </span>
                </Link>

            )
        })
        return singers
    }
    async UNSAFE_componentWillMount() {
        await this.setState({
            ids: this.props.match.params.ids
        })
    //    发起axios请求
        let musicDetail = (await getMusicDetail({ids: this.state.ids}))
        this.setState({
            songInfo: musicDetail.songs[0],
            albumInfo: musicDetail.songs[0].al
        }, () => {
            //    保存背景图
            console.log(musicDetail.songs[0].al.picUrl)
            this.props.musicStore.backImg = musicDetail.songs[0].al.picUrl
        //    调用生成歌手
            this.setState({
                singers: this.bindSinger(this.state.songInfo.ar)
            })
        })

    }
    async componentWillUnmount() {
        this.props.musicStore.backImg =""
    }

    render() {
        let {songInfo, albumInfo} = this.state
        let {musicStore}  = this.props
        console.log(songInfo)
        return (
            <div className="musicDetail">
                    {/* 背景图*/}
                    <div className="backImg">
                        <Image src={albumInfo.picUrl} height="100%" style={{minHeight: "80%"}} placeholder={<Image src={albumInfo.picUrl} />} />
                    </div>
                    <div className="musicDetailMain">
                    {/* 顶部---标题，返回按钮*/}
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
                    {/* 播放页的专辑盘旋转*/}
                    <div className="playAlbum">
                        <div className="outerAlbum" >
                            <Image src={albumInfo.picUrl} />
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
                        <div className="prevMusic">
                            <Icon.LeftCircleTwoTone twoToneColor="#fa0e0ef0" />
                        </div>
                        <div className="pauseMusic" >
                            {this.state.isPlaying?<Icon.PauseCircleTwoTone onClick={this.playMusic.bind(this, this.state.ids)} twoToneColor="#fa0e0ef0" />:<Icon.PlayCircleTwoTone onClick={this.playMusic.bind(this, this.state.ids)} twoToneColor="lightgrey" />}
                        </div>
                        <div className="nextMusic">
                            <Icon.RightCircleTwoTone twoToneColor="#fa0e0ef0" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export {MusicDetail as default}
