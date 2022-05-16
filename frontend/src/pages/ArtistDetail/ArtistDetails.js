import React from 'react'
import "../ListArtist/list_artist.css";
import Check from '../../assets/img/check.png'

const ArtistDetail = () => {
    return (
        <div className="home-container__artist-intro">
            <div className="home-container__desc">
                <div className="artist-intro__image">
                    <img src="https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/Uploaded/izhqv/2021_01_15/1_1.jpg" alt />
                </div>
                <div className="artist-intro__text">
                    <div className="artist-intro__name">
                        <h1>Bùi Anh Tuấn</h1>
                        <img src={Check} alt="Check" />
                    </div>
                    <span>(09/09/1991)</span>
                    <div className="artist-intro__follow">
                        <p>1000 followers</p>
                        <button className="artist-intro__btn-follow">
                            + Follow
                        </button>
                        {/* <button class="artist-intro__btn-follow">
                                      Following
                                  </button> */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ArtistDetail;