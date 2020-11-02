/**
 *@auther: tang
 @Date: 2020-10-31
 *Project: netbaseMusic
 */
import React from "react"
import {getNewMvs} from "../api/api";
import MvList from "./home/MvList";
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newMvs:[]
        }
    }
    async componentWillMount () {
         //请求最新mv
        let firstMvs = (await getNewMvs({limit:10})).data;
        console.log(firstMvs);
        this.setState({
            newMvs:firstMvs
        })
    }
    render() {
        return (
            <div>
                <h2>这是首页</h2>
                <h3>最新mv</h3>
                <MvList newMvs={this.state.newMvs}/>
            </div>
        )
    }
}

export {Home as default}
