import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import PostPage from "../pages/PostPage/PostPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Header from "../components/Header/Header"


const Router = () => {
    return (
        <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/signup">
                <SignUpPage />
            </Route>
            <Route exact path="/posts">
                <PostPage />
            </Route>
            <Route exact path="/comments">
                <CommentsPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
        </BrowserRouter>
    );
};

export default Router;