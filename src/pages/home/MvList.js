/**
 *@auther: tang
 @Date: 2020-11-02
 *Project: netbaseMusic
 */
import React from "react"

class MvList extends React.Component {
    render() {
        let mvListEle = [];
        if (this.props.newMvs){
            mvListEle = this.props.newMvs.map(item=>{
                return (
                    <div className="listItem" key={item.id}>
                        <img src={item.cover} alt="封面"/>
                    </div>
                )
            })
        }
        console.log(this.props)
        return (
            <div>
                {mvListEle}
            </div>
        )
    }
}

export {MvList as default}
