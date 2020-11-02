import {BrowserRouter as Router, Route} from "react-router-dom";
import React from "react"
import Home from "./pages/Home";
import Community from "./pages/Community";
import EleTv from "./pages/EleTv";
import Mine from "./pages/Mine";
import Nav from "./pages/Nav";
//引入顶部导航

function App() {
    return (
        <div className="App">

            <div>
                <Router>
                    <Nav/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/eleTv" component={EleTv}></Route>
                    <Route path="/community" component={Community}></Route>
                    <Route path="/mine" component={Mine}></Route>
                </Router>
            </div>

        </div>
    );
}

export default App;
