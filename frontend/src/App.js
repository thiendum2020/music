import React, { useState } from "react";
import { Route, Routes, useLocation, Redirect } from "react-router-dom";
import PlayerFooter from "./components/PlayerFooter/PlayerFooter.js";
import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/index.js";

import Home from "./pages/Home/Home.js";
import ListArtist from "./pages/ListArtist/ListArtist.js";
import ArtistDetails from "./pages/ArtistDetail/ArtistDetails.js";
import ListSong from "./pages/ListSong/ListSong.js";
import LeftPlaylist from "./components/LeftPlaylist/LeftPlaylist.js";
import { useDispatch, useSelector } from 'react-redux';
import Login from './pages/Login/Login.js'



const App = () => {
    const { isAuthenticated } = useSelector(state => state.authReducer)
    return (
        <>
            <div className="app">
                <div className="background"></div>
                <div className="main-content">
                    <Sidebar />
                    <div className="home-container">
                        <Header />
                        <div className="home-container__center">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/songs" element={<ListSong />} />
                                <Route path="/artists" element={<ListArtist />} />
                                <Route path="/artist-details/:id" element={<ArtistDetails />} />
                                <Route path="/playlists" element={<LeftPlaylist />} />
                                <Route path="/login" element={<Login />} />
                            </Routes>
                        </div>
                    </div>
                </div>
                <PlayerFooter />
            </div>
        </>
    );
}

export default App;
