/**
 *@auther: tang
 @Date: 2020-11-07
 *Project: atianmusic
 */
import React from "react"
import "./BottomBar/bottomBar.css"
import * as Icon from "@ant-design/icons"
import {observer,inject} from "mobx-react";
@inject("musicStore")
@observer
class BottomBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying:false
        }
    }
    render() {
        return (
            <div className="bottomBar">
                <div className="left">
                    <div className="prevMusic">
                        <Icon.LeftCircleTwoTone twoToneColor="#fa0e0ef0"/>
                    </div>
                    <div className="pauseMusic">
                        {this.props.musicStore.isPlaying?<Icon.PauseCircleTwoTone twoToneColor="#fa0e0ef0"/>:<Icon.PlayCircleTwoTone twoToneColor="lightgrey"/>}
                    </div>
                    <div className="nextMusic">
                        <Icon.RightCircleTwoTone twoToneColor="#fa0e0ef0"/>
                    </div>
                </div>
                <div className="right">

                </div>
            </div>
        )
    }
}

export {BottomBar as default}
