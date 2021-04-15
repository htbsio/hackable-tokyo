import React from "react";

import { Container, Header, Main, Footer } from "@components";
import Head from "next/head"
import { Admin } from "../src/views/Index";
import {
    StaticRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;800&display=swap" rel="stylesheet" />
            </Head>
            <Router>
                <div>
                    <Switch>
                        <Route path="/about">
                        </Route>
                        <Route path="/users">
                        </Route>
                        <Route path="/">
                            <Container>
                                <Header />
                                <Admin />
                                <Footer />
                            </Container>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
};

export default Home;
