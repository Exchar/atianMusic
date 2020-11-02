/**
 *@auther: tang
 @Date: 2020-10-31
 *Project: netbaseMusic
 */
import React from "react"
import {Link} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/home">首页</Link></li>
                        <li><Link to="/eleTv">电台</Link></li>
                        <li><Link to="/community">社区</Link></li>
                        <li><Link to="/mine">我的</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export {Nav as default}
