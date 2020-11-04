/**
 *@auther: tang
 @Date: 2020-10-31
 *Project: netbaseMusic
 */
import React from "react"
import {Link} from "react-router-dom";
import {Menu} from 'antd';
import {RocketTwoTone,CustomerServiceTwoTone,SmileTwoTone,StarTwoTone} from '@ant-design/icons';


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

                <Menu.Item key="home" icon={<SmileTwoTone twoToneColor='#eb2f96'/>}>
                    <Link to="/home">
                        音乐汇
                    </Link>
                </Menu.Item>
                <Menu.Item key="eleTv" icon={<RocketTwoTone twoToneColor='#eb2f96'/>}>
                    <Link to="/eleTv">
                        电台
                    </Link>
                </Menu.Item>
                <Menu.Item key="cate" icon={<StarTwoTone twoToneColor='#eb2f96'/>}>
                    <Link to="/community">
                        音乐社区
                    </Link>
                </Menu.Item>
                <Menu.Item key="mine" icon={<CustomerServiceTwoTone twoToneColor='#eb2f96'/>}>
                    <Link to="/mine">
                        我的Style
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }

}

export {Nav as default}
