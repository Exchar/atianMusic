/**
 *@auther: tang
 @Date: 2020-11-02
 *Project: netbaseMusic
 */
import React from "react"
import "./list.css"
import {Link} from "react-router-dom"

class MvList extends React.Component {
    render() {
        let mvListEle = [];
        if (this.props.newMvs) {
            mvListEle = this.props.newMvs.map(item => {
                return (
                    <div className="listItem" key={item.id}>
                        <Link to={{pathname: `/videoDetail/${item.id}`}}>
                            <img src={item.cover} alt="封面"/>
                        </Link>
                    </div>

                )
            })
        }
        return (
            <div className="newMvsContainer">
                <h2>最新MV</h2>
                <div className="homeList">
                    {mvListEle}
                </div>
            </div>
        )
    }
}

export {MvList as default}
