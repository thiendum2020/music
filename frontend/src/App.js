import React from "react";
import { Route, Routes, useLocation, Redirect } from "react-router-dom";
import PlayerFooter from "./components/PlayerFooter/PlayerFooter.js";
import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/index.js";
import PrivateRoute from "./PrivateRoute";

import Home from "./pages/Home/Home.js";
import ListArtist from "./pages/ListArtist/ListArtist.js";
import ArtistDetails from "./pages/ArtistDetail/ArtistDetails.js";
import ListSong from "./pages/ListSong/ListSong.js";
import LeftPlaylist from "./components/LeftPlaylist/LeftPlaylist.js";
import { useDispatch } from "react-redux";
import Login from "./pages/Login/Login.js";

const App = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    return (
        <>
            <div className="app">
                <div className="background"></div>
                {/* main content */}
                <div className="main-content">
                    {/* SideBar Left */}
                    <Sidebar />
                    <div className="home-container">
                        {/* Header */}
                        <Header />
                        <div className="home-container__center">
                            <Routes>
                                <Route
                                    path="/songs"
                                    element={
                                        <PrivateRoute>
                                            <ListSong />
                                        </PrivateRoute>
                                    }
                                />
                                <Route
                                    path="/artists"
                                    element={
                                        <PrivateRoute>
                                            <ListArtist />
                                        </PrivateRoute>
                                    }
                                />
                                <Route
                                    path="/artist-details/:id"
                                    element={
                                        <PrivateRoute>
                                            <ArtistDetails />
                                        </PrivateRoute>
                                    }
                                />
                                <Route
                                    path="/playlists"
                                    element={
                                        <PrivateRoute>
                                            <LeftPlaylist />
                                        </PrivateRoute>
                                    }
                                />
                                <Route path="/login" element={<Login />} />
                                <Route
                                    path="/"
                                    element={
                                        <PrivateRoute>
                                            <Home />
                                        </PrivateRoute>
                                    }
                                />
                            </Routes>
                        </div>
                    </div>
                </div>
                {/* footer content */}
                <PlayerFooter />
            </div>
        </>
    );
};

export default App;
