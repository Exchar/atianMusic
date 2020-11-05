import {BrowserRouter as Router, Route} from "react-router-dom";
import React from "react"
import Home from "./pages/Home";
import Community from "./pages/Community";
import EleTv from "./pages/EleTv";
import Mine from "./pages/Mine";
import "./App.css"
import "./pages/global.css"
import MusicDetail from "./pages/MusicDetail";
import {Image} from "antd"
//引入顶部导航
import Nav from "./pages/Nav";
import Container from "@material-ui/core/Container"
import VideoDetail from "./pages/MvDetail";
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
function App() {
    return (
        <div className="App">
            <Container>
                <div>
                    <Layout>
                        <Router>
                        <Header>
                            <Nav/>
                        </Header>
                        <Content style={{backgroundColor:"rgb(240,242,245)",borderRadius:"10px"}}>
                            <Route path="/" exact component={Home}/>
                            <Route path="/home" component={Home}></Route>
                            <Route path="/eleTv" component={EleTv}></Route>
                            <Route path="/community" component={Community}></Route>
                            <Route path="/mine" component={Mine}></Route>
                            <Route path="/videoDetail/:mvid?" component={VideoDetail}></Route>
                                <Route path="/musicDetail/:ids?" component={MusicDetail}></Route>
                        </Content>
                        <Footer>Footer</Footer>
                        </Router>
                    </Layout>
                </div>
            </Container>
        </div>
    );
}

export default App;
