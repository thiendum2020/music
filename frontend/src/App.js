import React from "react";
import { Route, Routes } from "react-router-dom";
import PlayerFooter from "./components/PlayerFooter/PlayerFooter.js";
import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/index.js";

import Home from "./pages/Home/Home.js";
import ListArtist from "./pages/ListArtist/ListArtist.js";
import ArtistDetails from "./pages/ArtistDetail/ArtistDetails.js";
import ListSong from "./pages/ListSong/ListSong.js";
import LeftPlaylist from "./components/LeftPlaylist/LeftPlaylist.js";

function App() {
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
                                <Route path="/" element={<Home />} />
                                <Route path="/songs" element={<ListSong />} />
                                <Route path="/artists" element={<ListArtist />} />
                                <Route path="/artist-details/:id" element={<ArtistDetails />} />
                                <Route path="/playlists" element={<LeftPlaylist />} />
                            </Routes>
                        </div>
                    </div>
                </div>
                {/* footer content */}
                <PlayerFooter />
            </div>
        </>
    );
}

export default App;
