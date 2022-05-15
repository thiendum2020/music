import React from "react";
import "./side_bar.css";
import { NavLink } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu.js";
import LeftPlaylist from "../LeftPlaylist/LeftPlaylist.js";

const SideBar = () => {
    return (
        <div className="left-container">
            {/* logo */}
            <div className="left-container__logo">
                <h3>TV Music</h3>
            </div>
            {/* left menu */}
            <div className="left-container__menu">
                <p>MENU</p>
                <ul>
                    <li className="left-container__home active">
                        <NavLink to="/">
                            <i className="bx bx-home icon-none" />
                            <i className="bx bxs-home icon-active" />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li className="left-container__song">
                        <NavLink to="/songs">
                            <i className="bx bx-music icon-none" />
                            <i className="bx bxs-music icon-active" />
                            <span>Song</span>
                        </NavLink>
                    </li>
                    <li className="left-container__artist">
                        <NavLink to="/artists">
                            <i className="bx bx-microphone icon-none" />
                            <i className="bx bxs-microphone-alt icon-active" />
                            <span>Artist</span>
                        </NavLink>
                    </li>
                    {/* <li class="left-container__albums">
                       <NavLink to="/">
                            <i class="bx bx-album icon-none"></i>
                            <i class="bx bxs-album icon-active"></i>
                            <span>Albums</span>
                        </a>
                    </li> */}
                    <li className="left-container__favourite">
                        <NavLink to="/">
                            <i className="bx bx-heart icon-none" />
                            <i className="bx bxs-heart icon-active" />
                            <span>Favorite Songs</span>
                        </NavLink>
                    </li>
                    <li className="left-container__search">
                        <NavLink to="/">
                            <i className="bx bx-search icon-none" />
                            <i className="bx bxs-search icon-active" />
                            <span>Search</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* playlist */}
            <div className="left-container__playlist">
                <div className="left-container__playlist-header">
                    <NavLink to="/playlists">
                        <p>PLAYLISTS</p>
                    </NavLink>
                    <i className="bx bx-plus-medical" />
                </div>
                <div className="left-container__playlist-scroll">
                    <div className="left-container__playlist-item">
                        <i className="bx bxs-playlist" />
                        <p>Playlist 1</p>
                        <i className="bx bx-trash" />
                    </div>
                    <div className="left-container__playlist-item">
                        <i className="bx bxs-playlist" />
                        <p>Tiktok Remix</p>
                        <i className="bx bx-trash" />
                    </div>
                    <div className="left-container__playlist-item">
                        <i className="bx bxs-playlist" />
                        <p>Songs For Kids</p>
                        <i className="bx bx-trash" />
                    </div>
                    <div className="left-container__playlist-item">
                        <i className="bx bxs-playlist" />
                        <p>Guitar Top Hits</p>
                        <i className="bx bx-trash" />
                    </div>
                    <div className="left-container__playlist-item">
                        <i className="bx bxs-playlist" />
                        <p>Relaxing Music</p>
                        <i className="bx bx-trash" />
                    </div>
                    <div className="left-container__playlist-item">
                        <i className="bx bxs-playlist" />
                        <p>Hip Pop</p>
                        <i className="bx bx-trash" />
                    </div>
                    <div className="left-container__playlist-item">
                        <i className="bx bxs-playlist" />
                        <p>Tiktok Remix</p>
                        <i className="bx bx-trash" />
                    </div>
                    <div className="left-container__playlist-item">
                        <i className="bx bxs-playlist" />
                        <p>Tiktok Remix</p>
                        <i className="bx bx-trash" />
                    </div>
                    <div className="left-container__playlist-item">
                        <i className="bx bxs-playlist" />
                        <p>Songs For Kids</p>
                        <i className="bx bx-trash" />
                    </div>
                    <div className="left-container__playlist-item">
                        <i className="bx bxs-playlist" />
                        <p>Guitar Top Hits</p>
                        <i className="bx bx-trash" />
                    </div>
                    <div className="left-container__playlist-item">
                        <i className="bx bxs-playlist" />
                        <p>Relaxing Music</p>
                        <i className="bx bx-trash" />
                    </div>
                    <div className="left-container__playlist-item">
                        <i className="bx bxs-playlist" />
                        <p>Hip Pop</p>
                        <i className="bx bx-trash" />
                    </div>
                    <div className="left-container__playlist-item">
                        <i className="bx bxs-playlist" />
                        <p>Tiktok Remix</p>
                        <i className="bx bx-trash" />
                    </div>
                    <div className="left-container__playlist-item">
                        <i className="bx bxs-playlist" />
                        <p>Tiktok Remix</p>
                        <i className="bx bx-trash" />
                    </div>
                    <div className="left-container__playlist-item">
                        <i className="bx bxs-playlist" />
                        <p>Songs For Kids</p>
                        <i className="bx bx-trash" />
                    </div>
                    <div className="left-container__playlist-item">
                        <i className="bx bxs-playlist" />
                        <p>Guitar Top Hits</p>
                        <i className="bx bx-trash" />
                    </div>
                    <div className="left-container__playlist-item">
                        <i className="bx bxs-playlist" />
                        <p>Relaxing Music</p>
                        <i className="bx bx-trash" />
                    </div>
                    <div className="left-container__playlist-item">
                        <i className="bx bxs-playlist" />
                        <p>Hip Pop</p>
                        <i className="bx bx-trash" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SideBar;
