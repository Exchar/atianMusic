/**
 *@auther: tang
 @Date: 2020-10-31
 *Project: netbaseMusic
 */
import React from "react"
import {getNewMvs, getTopArtists} from "../api/api";
import MvList from "./home/MvList";
import TopArtists from "./home/TopArtists";
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newMvs:[],
            hotArts:[]
        }
    }
    async componentWillMount () {
         //请求最新mv
        let firstMvs = (await getNewMvs({limit:30})).data;
        console.log(firstMvs)
        //获取最热歌手
        let firstArts = (await getTopArtists({
            limit:30,
            offset:0
        })).artists;
        this.setState({
            hotArts:firstArts,
            newMvs:firstMvs
        })
    }
    render() {
        return (
            <div>
                <h2>这是首页</h2>
                <MvList newMvs={this.state.newMvs}/>
                <TopArtists hotArts={this.state.hotArts}/>
            </div>
        )
    }
}

export {Home as default}
