import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import BottomBar from "./Components/BottomBar/BottomBar";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import Auth from './Components/Auth/Auth';
import Profile from './Components/Profile/Profile';
import './App.scss';
import {useAuth} from "./AuthContext";
import ProductInfo from "./Components/Catalog/ProductDetails";
import Catalog from "./Components/Catalog/Catalog";
import ScrollToTop from "./Components/ScrollToTop";
import Search from "./Components/Catalog/Search";

function App() {
    const {isAuthenticated} = useAuth();

    return (
        <div className="App">
            <Router>
                <ScrollToTop/>
                <Header/>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/catalog" element={<Catalog/>}/>
                        <Route path="/product/:id" element={<ProductInfo/>}/>
                        <Route path="/search/:type/:query" element={<Search />} />

                        <Route path="/auth" element={isAuthenticated ? <Navigate to="/profile" replace/> : <Auth/>}/>
                        <Route path="/profile" element={isAuthenticated ? <Profile/> : <Navigate to="/auth" replace/>}/>
                    </Routes>
                </div>
                <Footer/>
                <BottomBar/>
            </Router>
        </div>
    );
}

export default App;
