import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import HomeTwo from "./pages/HomeTwo";
import About from "./pages/About";
import BlogRightSidebar from "./pages/BlogRightSidebar";
import Contact from "./pages/Contact";
import LoginRegister from "./pages/LoginRegister";
import NotFound from "./pages/NotFound";
import AboutBitcoin from "./pages/AboutBitcoin";
import AdminDashboardHome from "./pages/AdminDashboardHome";
import AddNews from "./components/news/AddNews";
import NewsList from "./components/news/NewsList";
import EditNews from "./components/news/EditNews";
import AddCoin from "./components/coins/AddCoin";
import CoinsList from "./components/coins/CoinsList";
import EditCoin from "./components/coins/EditCoin";
import Foreteller from "./pages/Foreteller";
import CustomerDashboardHome from "./pages/CustomerDashboardHome";
import UsersList from "./components/dashboard/admin/UsersList";
import CustomerProfile from "./components/customer/CustomerProfile";

function App() {
    return (
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route
                        exact
                        path={`${process.env.PUBLIC_URL + "/"}`}
                        component={HomeTwo}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/about"}`}
                        component={About}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/coins"}`}
                        component={AboutBitcoin}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/foreteller"}`}
                        component={Foreteller}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/news"}`}
                        component={BlogRightSidebar}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/contact"}`}
                        component={Contact}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/login"}`}
                        component={LoginRegister}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/not-found"}`}
                        component={NotFound}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/add-news"}`}
                        component={AddNews}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/news-list"}`}
                        component={NewsList}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/edit-news"}`}
                        component={EditNews}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/add-coin"}`}
                        component={AddCoin}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/coins-list"}`}
                        component={CoinsList}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/coin-edit"}`}
                        component={EditCoin}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/admin-dashboard"}`}
                        component={AdminDashboardHome}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/customer-dashboard"}`}
                        component={CustomerDashboardHome}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/users-list"}`}
                        component={UsersList}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/customer-profile"}`}
                        component={CustomerProfile}
                    />
                    <Route exact component={NotFound}/>
                </Switch>
            </ScrollToTop>
        </Router>
    );
}

export default App;
