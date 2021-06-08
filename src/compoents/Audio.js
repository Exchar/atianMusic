/**
 *@auther: tang
 @Date: 2020-11-07
 *Project: netbaseMusic
 */
import React from "react"
import {observer, inject} from "mobx-react"
@inject("musicStore")
@observer
class Audio extends React.Component {
    constructor(props) {
        super(props)
        this.audio = React.createRef()
        this.state  = {
            url: this.props.musicStore.nowMusic,
            timer1: null,
            autoPlay: true,
            timer2: null,
            isPlaying: this.props.musicStore.isPlaying
        }
    }

    UNSAFE_componentWillMount() {
        console.log(this.props.musicStore)
        this.setState({
            timer1: setInterval(() => {
                let newUrl = this.props.musicStore.nowMusic
                let oldUrl = this.state.url
                if (newUrl!==oldUrl) {
                    this.setState({
                        url: newUrl
                    })
                }
            }, 500)
        })

    }
    componentDidMount() {
        // 当dom渲染完成后，如果音乐加载完成
        let audioDom = this.audio.current
        audioDom.onloadedmetadata =() => {
            console.log("音频加载完成")
            this.setState({
                isPlaying: true
            }, () => {
                this.props.musicStore.playMusic()
                audioDom.play()
            })

        }
        this.listenPlayState()
           // 准备完成后自动开始播放，为了后续维护，使用变量形式

    }
   listenPlayState() {
        let audioDom = this.audio.current
        this.setState({
            timer2: setInterval(() => {
                let newState =JSON.parse(sessionStorage.getItem("isPlaying"))
                let oldState = this.state.isPlaying
                if (newState!==oldState) {
                    // 判断当前的播放状态,为true就执行play
                    console.log("判断是否要播放", newState, oldState)
                    newState?audioDom.play():audioDom.pause()
                    this.setState({
                        isPlaying: newState
                    })
                }
            }, 500)
        })
    }
    componentWillUnmount() {
        this.setState({
            timer1: null,
            timer2: null
        })
        this.props.musicStore.pauseMusic()
    }
    render() {
        console.log(this.state.url)
        let {musicStore} = this.props
        return (
            <div>
                {<audio ref={this.audio} id="music" src={this.state.url || ""} autoPlay={musicStore.autoplay} />}
            </div>
        )
    }
}

export {Audio as default}
