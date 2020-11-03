/**
 *@auther: tang
 @Date: 2020-10-31
 *Project: netbaseMusic
 */
import React from "react"
import {Link} from "react-router-dom";
import {Menu} from 'antd';
import {AppstoreOutlined, MailOutlined} from '@ant-design/icons';


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'home'
        }
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({current: e.key});
    };

    render() {
        const {current} = this.state;
        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">

                <Menu.Item key="home" icon={<MailOutlined/>}>
                    <Link to="/home">
                        音乐汇
                    </Link>
                </Menu.Item>
                <Menu.Item key="eleTv" icon={<AppstoreOutlined/>}>
                    <Link to="/eleTv">
                        电台
                    </Link>
                </Menu.Item>
                <Menu.Item key="cate" icon={<AppstoreOutlined/>}>
                    <Link to="/community">
                        歌单分类
                    </Link>
                </Menu.Item>
                <Menu.Item key="mine" icon={<AppstoreOutlined/>}>
                    <Link to="/mine">
                        我的Style
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }

}

export {Nav as default}
