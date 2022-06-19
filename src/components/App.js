import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/movies">
                    <div>
                    <Movies />
                    </div>
                </Route>

                <Route path="/directors">
                    <Directors />
                </Route>

                <Route path="/actors">
                    <Actors />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
            </Switch>            

            {/* <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/actors" element={<Actors />} ></Route>
                <Route path="/Directors" element={<Directors />} ></Route>
                <Route path="/Movies" element={<Movies />} ></Route>
            </Routes> */}
    </div>
    )
}

export default App;
