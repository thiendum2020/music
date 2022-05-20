import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import {
    getAllSongsPublished
} from "../../actions/songActions";

const Home = () => {
    const dispatch = useDispatch();
    const { publishedSongs } = useSelector((state) => state.publishedSongsReducer);

    useEffect(() => {
        dispatch(getAllSongsPublished());
    }, [dispatch]);
    console.log(publishedSongs);
    
    return (
        <>
            {/* home container center */}
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
                            <span>
                                <i className="bx bxs-music" /> 9.999.999
                            </span>
                        </div>
                    </div>
                    <div className="home-container__item-song">
                        <div className="home-container__item-image">
                            <img src="https://i1.sndcdn.com/artworks-OKN13INxyuwe3LaX-Y1gbKg-t500x500.jpg" alt />
                        </div>
                        <div className="home-container__item-content">
                            <p>Nơi tình yêu bắt đầu</p>
                            <span>Bùi Anh Tuấn</span>
                            <span>
                                <i className="bx bxs-music" /> 9.999.999
                            </span>
                        </div>
                    </div>
                    <div className="home-container__item-song">
                        <div className="home-container__item-image">
                            <img src="https://i1.sndcdn.com/artworks-OKN13INxyuwe3LaX-Y1gbKg-t500x500.jpg" alt />
                        </div>
                        <div className="home-container__item-content">
                            <p>Nơi tình yêu bắt đầu</p>
                            <span>Bùi Anh Tuấn</span>
                            <span>
                                <i className="bx bxs-music" /> 9.999.999
                            </span>
                        </div>
                    </div>
                    <div className="home-container__item-song">
                        <div className="home-container__item-image">
                            <img src="https://i1.sndcdn.com/artworks-OKN13INxyuwe3LaX-Y1gbKg-t500x500.jpg" alt />
                        </div>
                        <div className="home-container__item-content">
                            <p>Nơi tình yêu bắt đầu</p>
                            <span>Bùi Anh Tuấn</span>
                            <span>
                                <i className="bx bxs-music" /> 9.999.999
                            </span>
                        </div>
                    </div>
                    <div className="home-container__item-song">
                        <div className="home-container__item-image">
                            <img src="https://i1.sndcdn.com/artworks-OKN13INxyuwe3LaX-Y1gbKg-t500x500.jpg" alt />
                        </div>
                        <div className="home-container__item-content">
                            <p>Nơi tình yêu bắt đầu</p>
                            <span>Bùi Anh Tuấn</span>
                            <span>
                                <i className="bx bxs-music" /> 9.999.999
                            </span>
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
                            <img
                                src="https://vcdn-thethao.vnecdn.net/2022/05/03/screenshot-2022-05-03-at-09-20-5156-4924-1651544469.png"
                                alt
                            />
                        </div>
                        <div className="home-container__item-content">
                            <p>Ronaldo</p>
                            <span>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At perferendis corporis
                                laudantium.
                            </span>
                        </div>
                    </div>
                    <div className="home-container__item-playlist">
                        <div className="home-container__item-image">
                            <img
                                src="https://vcdn-thethao.vnecdn.net/2022/05/03/screenshot-2022-05-03-at-09-20-5156-4924-1651544469.png"
                                alt
                            />
                        </div>
                        <div className="home-container__item-content">
                            <p>Ronaldo</p>
                            <span>Lorem ipsum dolor sit</span>
                        </div>
                    </div>
                    <div className="home-container__item-playlist">
                        <div className="home-container__item-image">
                            <img
                                src="https://vcdn-thethao.vnecdn.net/2022/05/03/screenshot-2022-05-03-at-09-20-5156-4924-1651544469.png"
                                alt
                            />
                        </div>
                        <div className="home-container__item-content">
                            <p>Ronaldo</p>
                            <span>Lorem ipsum dolor sit</span>
                        </div>
                    </div>
                    <div className="home-container__item-playlist">
                        <div className="home-container__item-image">
                            <img
                                src="https://vcdn-thethao.vnecdn.net/2022/05/03/screenshot-2022-05-03-at-09-20-5156-4924-1651544469.png"
                                alt
                            />
                        </div>
                        <div className="home-container__item-content">
                            <p>Ronaldo</p>
                            <span>Lorem ipsum dolor sit</span>
                        </div>
                    </div>
                    <div className="home-container__item-playlist">
                        <div className="home-container__item-image">
                            <img
                                src="https://vcdn-thethao.vnecdn.net/2022/05/03/screenshot-2022-05-03-at-09-20-5156-4924-1651544469.png"
                                alt
                            />
                        </div>
                        <div className="home-container__item-content">
                            <p>Ronaldo</p>
                            <span>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At perferendis corporis
                                laudantium.
                            </span>
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
                            <img
                                src="https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/Uploaded/izhqv/2021_01_15/1_1.jpg"
                                alt
                            />
                        </div>
                        <div className="home-container__item-content">
                            <p>Bùi Anh Tuấn</p>
                            <span>1000 followers</span>
                            <button className="item-artist__btn-follow">+ Follow</button>
                        </div>
                    </a>
                    <a href="./artist-details.html" className="home-container__item-artist">
                        <div className="home-container__artist-image">
                            <img
                                src="https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/Uploaded/izhqv/2021_01_15/1_1.jpg"
                                alt
                            />
                        </div>
                        <div className="home-container__item-content">
                            <p>Bùi Anh Tuấn</p>
                            <span>1000 followers</span>
                            <button className="item-artist__btn-follow">+ Follow</button>
                        </div>
                    </a>
                    <a href="./artist-details.html" className="home-container__item-artist">
                        <div className="home-container__artist-image">
                            <img
                                src="https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/Uploaded/izhqv/2021_01_15/1_1.jpg"
                                alt
                            />
                        </div>
                        <div className="home-container__item-content">
                            <p>Bùi Anh Tuấn</p>
                            <span>1000 followers</span>
                            <button className="item-artist__btn-follow">+ Follow</button>
                        </div>
                    </a>
                    <a href="./artist-details.html" className="home-container__item-artist">
                        <div className="home-container__artist-image">
                            <img
                                src="https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/Uploaded/izhqv/2021_01_15/1_1.jpg"
                                alt
                            />
                        </div>
                        <div className="home-container__item-content">
                            <p>Bùi Anh Tuấn</p>
                            <span>1000 followers</span>
                            <button className="item-artist__btn-follow">+ Follow</button>
                        </div>
                    </a>
                    <a href="./artist-details.html" className="home-container__item-artist">
                        <div className="home-container__artist-image">
                            <img
                                src="https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/Uploaded/izhqv/2021_01_15/1_1.jpg"
                                alt
                            />
                        </div>
                        <div className="home-container__item-content">
                            <p>Bùi Anh Tuấn</p>
                            <span>1000 followers</span>
                            <button className="item-artist__btn-follow">+ Follow</button>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}
export default Home;