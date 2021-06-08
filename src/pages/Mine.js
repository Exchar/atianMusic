/**
 *@auther: tang
 @Date: 2020-10-31
 *Project: netbaseMusic
 */
import React from "react"
import {inject, observer} from "mobx-react"
@inject("CountOne")
@inject("CountTwo")
@observer
class Mine extends React.Component {
    addNumOne() {
        this.props.CountOne.addNum1()
    }
    addNumTwo() {
        this.props.CountTwo.addNum2()
    }
    radNumOne() {
        this.props.CountOne.radNum1()
    }
    radNumTwo() {
        this.props.CountTwo.radNum2()
    }
    render() {
        let {CountOne, CountTwo} = this.props
        return (
            <div>
                <h2>我的</h2>
                <h4>当前的a:{CountOne.num1}</h4>
                <button onClick={this.radNumOne.bind(this)}>点我减少a</button>
                <button onClick={this.addNumOne.bind(this)}>点我增加a</button>
                <h4>当前的b:{CountTwo.num2}</h4>
                <button onClick={this.radNumTwo.bind(this)}>点我减少b</button>
                <button onClick={this.addNumTwo.bind(this)}>点我增加b</button>
                <h4>a+b={CountOne.num1+CountTwo.num2}</h4>
                <h4>a*b={CountOne.num1*CountTwo.num2}</h4>
                <h4>a/b={CountOne.num1/CountTwo.num2}</h4>
            </div>
        )
    }
}

export {Mine as default}
