import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import PostPage from "../pages/PostPage/PostPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";



const Router = ({setRightButtonText}) => {
    return (
        
        
        <Switch>
            <Route exact path="/">
                <HomePage setRightButtonText={setRightButtonText} />
            </Route>
            <Route exact path="/signup">
                <SignUpPage setRightButtonText={setRightButtonText}/>
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
        
    );
};

export default Router;