/**
 *@auther: tang
 @Date: 2020-11-02
 *Project: netbaseMusic
 */
import React from "react"
import "./list.css"
class TopArtists extends React.Component {
    render() {
        let list = [];
        if (this.props.hotArts){
            list = this.props.hotArts.map(item=>{
                return (
                    <div className="listItem" key={item.id}>
                        <img src={item.img1v1Url} alt="歌手"/>
                    </div>
                )
            })
        }
        return (
            <div>
                <h2>最热歌手</h2>
                <div className="homeList">
                    {list}
                </div>
            </div>
        )
    }
}

export {TopArtists as default}
