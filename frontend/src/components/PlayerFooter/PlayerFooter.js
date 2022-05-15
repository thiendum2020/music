import React from "react";
import "./player_footer.css";

export default function PlayerFooter() {
    return (
        <div className="footer-content">
            <div className="music-player">
                {/* music-player left */}
                <div className="music-player__left">
                    <div className="music-player__img">
                        <img
                            src="https://vnn-imgs-f.vgcloud.vn/2020/11/25/08/bui-anh-tuan-cover-love-song-tang-sinh-nhat-thay-ho-ngoc-ha.jpg"
                            alt="THERE'S NO ONE AT ALL"
                        />
                    </div>
                    <div className="music-player__details">
                        <p>Nơi tình yêu bắt đầu</p>
                        <span>Bùi Anh Tuấn</span>
                    </div>
                </div>
                {/* music-player center */}
                <div className="music-player__center">
                    <div className="music-player__controll">
                        <div className="music-player__controll-top">
                            {/* controll-top  left-section */}
                            <div className="controll-top__left-section">
                                <div className="controll-top__action-heart active">
                                    <i className="bx bxs-heart" />
                                </div>
                                <div className="controll-top__action-download">
                                    <i>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 16 16"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                        </svg>
                                    </i>
                                </div>
                            </div>
                            {/* controll-top  middle-section */}
                            <div className="controll-top__middle-section">
                                <div className="controll-top__action-repeat">
                                    <i className="fa fa-repeat" aria-hidden="true" />
                                </div>
                                <div className="controll-top__action-previous">
                                    <i className="fa fa-step-backward" aria-hidden="true" />
                                </div>
                                <div className="controll-top__action-play">
                                    <i className="fa fa-play-circle" aria-hidden="true" />
                                </div>
                                <div className="controll-top__action-forward">
                                    <i className="fa fa-step-forward" aria-hidden="true" />
                                </div>
                                <div className="controll-top__action-random">
                                    <i className="fa fa-random" aria-hidden="true" />
                                </div>
                            </div>
                            {/* controll-top  right-section */}
                            <div className="controll-top__right-section">
                                <i>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 448 512"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z" />
                                    </svg>
                                </i>
                            </div>
                        </div>
                        {/* music-player controll-bottom */}
                        <div className="music-player__controll-bottom">
                            <div className="music-player__current-time">00:30</div>
                            <input type="range" className="music-player__progress-bar" defaultValue={0} max={25} />
                            <div className="music-player__duration">01:00</div>
                        </div>
                    </div>
                </div>
                {/* music-player center */}
                <div className="music-player__right">
                    <div className="music-player__volume-duration">
                        <input type="range" className="music-player__volume-bar" defaultValue={75} max={100} />
                    </div>
                    <a className="music-player__btn-volume">
                        <i className="bx bx-volume-full" />
                    </a>
                </div>
            </div>
        </div>
    );
}
