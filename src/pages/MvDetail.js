/**
 *@auther: tang
 @Date: 2020-11-02
 *Project: netbaseMusic
 */
import React from "react"
import {getMvDetail, getMvDetailInfo, getMvUrl} from "../api/api";
import {Col,Row} from "antd"

class MvDetail extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            mvInfo: {},
            mvid: this.props.match.params.mvid,
            mvUrl:{},
            getMvDetailInfo:{}
        }
    }

    async componentWillMount() {
        //获取传过来的视频id
        let mvDetail = (await getMvDetail({mvid: this.state.mvid})).data;
        let mvUrl = (await getMvUrl({id: this.state.mvid})).data;
        let mvDetailInfo = (await getMvDetailInfo({mvid: this.state.mvid}));
        this.setState({
            mvDetail: mvDetail,
            mvDetailInfo:mvDetailInfo,
            mvUrl:mvUrl
        })
        console.log(mvDetail,mvUrl,mvDetailInfo)
    }
    render() {
        let {mvDetail,mvUrl,mvDetailInfo} = this.state;
        if (mvDetail) {
            return (
                <div>
                    <h3>mv详情</h3>
                    <div className="detailMain">
                        <video controls={true} style={{width:"90%",margin:"auto"}} src={mvUrl.url} muted={true}/>
                    </div>
                {/*    mv信息显示区域*/}
                <div className="mvDetail">
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                </div>
                </div>
            )
        } else {
            return (<div><h3>mv详情</h3></div>)
        }

    }
}

export {MvDetail as default}
