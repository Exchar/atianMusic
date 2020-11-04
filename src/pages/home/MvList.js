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
                            <div className="mvImgOuter">
                                <img src={item.cover} alt="封面"/>
                            </div>
                            <div className="mvItemDesc">
                                <p>{item.name}--{item.artistName}</p>
                                <p>{item.playCount}次播放</p>
                            </div>
                        </Link>
                    </div>

                )
            })
        }
        return (
            <div className="newMvsContainer">
                <p>
                    <span className="hasDesc">
                    最新MV
                </span>
                    </p>
                <div className="homeList">
                    {mvListEle}
                    <div className="listItem">
                        <Link to={{pathname: `/mvMore`}}>
                            <div className="mvImgOuter">
                                <img src="" alt="封面"/>
                            </div>
                            <div className="mvItemDesc">
                               <p>查看更多>>></p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export {MvList as default}
