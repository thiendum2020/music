import React from 'react'
import Avatar from '../assets/img/avatar.jpg'
export default function Home() {
    return (
        <div className="app">
            <div className="background" />
            {/* main content */}
            <div className="main-content">
                {/* left container */}
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
                                <a href="#">
                                    <i className="bx bx-home icon-none" />
                                    <i className="bx bxs-home icon-active" />
                                    <span>Home</span>
                                </a>
                            </li>
                            <li className="left-container__song">
                                <a href="./song.html">
                                    <i className="bx bx-music icon-none" />
                                    <i className="bx bxs-music icon-active" />
                                    <span>Song</span>
                                </a>
                            </li>
                            <li className="left-container__artist">
                                <a href="./artist.html">
                                    <i className="bx bx-microphone icon-none" />
                                    <i className="bx bxs-microphone-alt icon-active" />
                                    <span>Artist</span>
                                </a>
                            </li>
                            {/* <li class="left-container__albums">
                          <a href="">
                              <i class="bx bx-album icon-none"></i>
                              <i class="bx bxs-album icon-active"></i>
                              <span>Albums</span>
                          </a>
                      </li> */}
                            <li className="left-container__favourite">
                                <a href>
                                    <i className="bx bx-heart icon-none" />
                                    <i className="bx bxs-heart icon-active" />
                                    <span>Favorite Songs</span>
                                </a>
                            </li>
                            <li className="left-container__search">
                                <a href>
                                    <i className="bx bx-search icon-none" />
                                    <i className="bx bxs-search icon-active" />
                                    <span>Search</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* playlist */}
                    <div className="left-container__playlist">
                        <div className="left-container__playlist-header">
                            <p>PLAYLISTS</p>
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
                {/* home container */}
                <div className="home-container">
                    {/* home container header */}
                    <div className="home-container__header">
                        <div className="home-container__breadcrumb">
                            <ul>
                                <li><a href="#">Home</a></li>
                                {/* <li>Popular Songs</li> */}
                            </ul>
                        </div>
                        <div className="home-container__user-login">
                            <a className="user-login__image" href="#">
                                <img src={Avatar} alt />
                            </a>
                            <div>
                                <p>
                                    <span>Hi, </span>
                                    <a className="user-login__tooltip" href>
                                        Thùy Vy
                                        <span className="user-login__tooltip-text">See my profile</span>
                                    </a>
                                </p>
                                <span>Logout</span>
                            </div>
                        </div>
                    </div>
                    {/* home container center */}
                    <div className="home-container__center">
                        <div className="home-container__popular-songs">
                            <div className="home-container__title">
                                <p>Popular songs</p>
                                <div className="home-container__see-more">
                                    <a href="./song.html">See more -&gt;</a>
                                </div>
                            </div>
                            <div className="home-container__list-items">
                                <div className="home-container__item-song">
                                    <div className="home-container__item-image">
                                        <img src="https://i1.sndcdn.com/artworks-OKN13INxyuwe3LaX-Y1gbKg-t500x500.jpg" alt />
                                        <div className="home-container__song-action">
                                            <i className="bx bxs-heart" />
                                            {/* <i class='bx bx-heart'></i> */}
                                            <i className="bx bx-play-circle" />
                                            <i className="bx bx-dots-horizontal-rounded" />
                                        </div>
                                    </div>
                                    <div className="home-container__item-content">
                                        <p>Nơi tình yêu bắt đầu</p>
                                        <a href="./artist-details.html">Bùi Anh Tuấn</a>
                                        <span><i className="bx bxs-music" /> 9.999.999</span>
                                    </div>
                                </div>
                                <div className="home-container__item-song">
                                    <div className="home-container__item-image">
                                        <img src="https://i1.sndcdn.com/artworks-OKN13INxyuwe3LaX-Y1gbKg-t500x500.jpg" alt />
                                    </div>
                                    <div className="home-container__item-content">
                                        <p>Nơi tình yêu bắt đầu</p>
                                        <span>Bùi Anh Tuấn</span>
                                        <span><i className="bx bxs-music" /> 9.999.999</span>
                                    </div>
                                </div>
                                <div className="home-container__item-song">
                                    <div className="home-container__item-image">
                                        <img src="https://i1.sndcdn.com/artworks-OKN13INxyuwe3LaX-Y1gbKg-t500x500.jpg" alt />
                                    </div>
                                    <div className="home-container__item-content">
                                        <p>Nơi tình yêu bắt đầu</p>
                                        <span>Bùi Anh Tuấn</span>
                                        <span><i className="bx bxs-music" /> 9.999.999</span>
                                    </div>
                                </div>
                                <div className="home-container__item-song">
                                    <div className="home-container__item-image">
                                        <img src="https://i1.sndcdn.com/artworks-OKN13INxyuwe3LaX-Y1gbKg-t500x500.jpg" alt />
                                    </div>
                                    <div className="home-container__item-content">
                                        <p>Nơi tình yêu bắt đầu</p>
                                        <span>Bùi Anh Tuấn</span>
                                        <span><i className="bx bxs-music" /> 9.999.999</span>
                                    </div>
                                </div>
                                <div className="home-container__item-song">
                                    <div className="home-container__item-image">
                                        <img src="https://i1.sndcdn.com/artworks-OKN13INxyuwe3LaX-Y1gbKg-t500x500.jpg" alt />
                                    </div>
                                    <div className="home-container__item-content">
                                        <p>Nơi tình yêu bắt đầu</p>
                                        <span>Bùi Anh Tuấn</span>
                                        <span><i className="bx bxs-music" /> 9.999.999</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home-container__popular-playlists">
                            <div className="home-container__title">
                                <p>Popular playlists</p>
                                <div className="home-container__see-more">
                                    <a href="#">See more -&gt;</a>
                                </div>
                            </div>
                            <div className="home-container__list-items">
                                <div className="home-container__item-playlist">
                                    <div className="home-container__item-image">
                                        <img src="https://vcdn-thethao.vnecdn.net/2022/05/03/screenshot-2022-05-03-at-09-20-5156-4924-1651544469.png" alt />
                                    </div>
                                    <div className="home-container__item-content">
                                        <p>Ronaldo</p>
                                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At perferendis
                                            corporis laudantium.</span>
                                    </div>
                                </div>
                                <div className="home-container__item-playlist">
                                    <div className="home-container__item-image">
                                        <img src="https://vcdn-thethao.vnecdn.net/2022/05/03/screenshot-2022-05-03-at-09-20-5156-4924-1651544469.png" alt />
                                    </div>
                                    <div className="home-container__item-content">
                                        <p>Ronaldo</p>
                                        <span>Lorem ipsum dolor sit</span>
                                    </div>
                                </div>
                                <div className="home-container__item-playlist">
                                    <div className="home-container__item-image">
                                        <img src="https://vcdn-thethao.vnecdn.net/2022/05/03/screenshot-2022-05-03-at-09-20-5156-4924-1651544469.png" alt />
                                    </div>
                                    <div className="home-container__item-content">
                                        <p>Ronaldo</p>
                                        <span>Lorem ipsum dolor sit</span>
                                    </div>
                                </div>
                                <div className="home-container__item-playlist">
                                    <div className="home-container__item-image">
                                        <img src="https://vcdn-thethao.vnecdn.net/2022/05/03/screenshot-2022-05-03-at-09-20-5156-4924-1651544469.png" alt />
                                    </div>
                                    <div className="home-container__item-content">
                                        <p>Ronaldo</p>
                                        <span>Lorem ipsum dolor sit</span>
                                    </div>
                                </div>
                                <div className="home-container__item-playlist">
                                    <div className="home-container__item-image">
                                        <img src="https://vcdn-thethao.vnecdn.net/2022/05/03/screenshot-2022-05-03-at-09-20-5156-4924-1651544469.png" alt />
                                    </div>
                                    <div className="home-container__item-content">
                                        <p>Ronaldo</p>
                                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At perferendis
                                            corporis laudantium.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home-container__popular-artists">
                            <div className="home-container__title">
                                <p>Popular artists</p>
                                <div className="home-container__see-more">
                                    <a href="./artist.html">See more -&gt;</a>
                                </div>
                            </div>
                            <div className="home-container__list-items">
                                <a href="./artist-details.html" className="home-container__item-artist">
                                    <div className="home-container__artist-image">
                                        <img src="https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/Uploaded/izhqv/2021_01_15/1_1.jpg" alt />
                                    </div>
                                    <div className="home-container__item-content">
                                        <p>Bùi Anh Tuấn</p>
                                        <span>1000 followers</span>
                                        <button className="item-artist__btn-follow">+ Follow</button>
                                    </div>
                                </a>
                                <a href="./artist-details.html" className="home-container__item-artist">
                                    <div className="home-container__artist-image">
                                        <img src="https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/Uploaded/izhqv/2021_01_15/1_1.jpg" alt />
                                    </div>
                                    <div className="home-container__item-content">
                                        <p>Bùi Anh Tuấn</p>
                                        <span>1000 followers</span>
                                        <button className="item-artist__btn-follow">+ Follow</button>
                                    </div>
                                </a>
                                <a href="./artist-details.html" className="home-container__item-artist">
                                    <div className="home-container__artist-image">
                                        <img src="https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/Uploaded/izhqv/2021_01_15/1_1.jpg" alt />
                                    </div>
                                    <div className="home-container__item-content">
                                        <p>Bùi Anh Tuấn</p>
                                        <span>1000 followers</span>
                                        <button className="item-artist__btn-follow">+ Follow</button>
                                    </div>
                                </a>
                                <a href="./artist-details.html" className="home-container__item-artist">
                                    <div className="home-container__artist-image">
                                        <img src="https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/Uploaded/izhqv/2021_01_15/1_1.jpg" alt />
                                    </div>
                                    <div className="home-container__item-content">
                                        <p>Bùi Anh Tuấn</p>
                                        <span>1000 followers</span>
                                        <button className="item-artist__btn-follow">+ Follow</button>
                                    </div>
                                </a>
                                <a href="./artist-details.html" className="home-container__item-artist">
                                    <div className="home-container__artist-image">
                                        <img src="https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/Uploaded/izhqv/2021_01_15/1_1.jpg" alt />
                                    </div>
                                    <div className="home-container__item-content">
                                        <p>Bùi Anh Tuấn</p>
                                        <span>1000 followers</span>
                                        <button className="item-artist__btn-follow">+ Follow</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer content */}
            <div className="footer-content">
                <div className="music-player">
                    {/* music-player left */}
                    <div className="music-player__left">
                        <div className="music-player__img">
                            <img src="https://vnn-imgs-f.vgcloud.vn/2020/11/25/08/bui-anh-tuan-cover-love-song-tang-sinh-nhat-thay-ho-ngoc-ha.jpg" alt="THERE'S NO ONE AT ALL" />
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
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
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
        </div>

    )
}
