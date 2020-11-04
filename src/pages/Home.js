/**
 *@auther: tang
 @Date: 2020-10-31
 *Project: netbaseMusic
 */
import React from "react"
import {getBanner, getNewMvs, getTopArtists} from "../api/api";
import MvList from "./home/MvList";
import TopArtists from "./home/TopArtists";
import HomeCarousel from "./home/HomeCarousel";
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newMvs:[],
            hotArts:[],
            homePageBlock:[],
            banners:[]
        }
    }
    async componentWillMount () {
         //请求最新mv
        let firstMvs = (await getNewMvs({limit:19})).data;
        console.log(firstMvs)
        //获取最热歌手
        let firstArts = (await getTopArtists({
            limit:19,
            offset:0
        })).artists;
        let banners = (await getBanner({type:0})).banners;
        console.log(banners)
        this.setState({
            hotArts:firstArts,
            newMvs:firstMvs,
            banners:banners
        })
    }
    render() {
        return (
            <div>
                <HomeCarousel banners={this.state.banners}/>
                <MvList newMvs={this.state.newMvs}/>
                <TopArtists hotArts={this.state.hotArts}/>
            </div>
        )
    }
}

export {Home as default}
