import React from "react";
import { Container } from "@material-ui/core";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//import useStyles from "./styles.js";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import Auth from "./components/Auth/Auth.js";

const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/auth" component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
};

export default App;
