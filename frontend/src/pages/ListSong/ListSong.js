import React from "react";
import "./list_song.css";

const ListSong = () => {
    return (
        <div className="home-contaier__grid-table">
            <table>
                <thead>
                    <tr>
                        <th style={{ width: 100, textAlign: "center" }}>#</th>
                        <th style={{ width: 700 }}>Name</th>
                        <th>Genre</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th style={{ width: 100, textAlign: "center" }}>
                            <i className="bx bxs-music" />
                        </th>
                        <th style={{ width: 150 }} />
                    </tr>
                </thead>
                <tbody>
                    <tr className="song-item playing">
                        <td style={{ textAlign: "center" }}>
                            <span>1</span>
                            {/* <i class="bx bx-play song-item__btn-play-pause"></i> */}
                            <i className="bx bx-pause song-item__btn-play-pause" />
                        </td>
                        <td className="song-item__details">
                            <div className="song-item__image">
                                <img src="https://i1.sndcdn.com/artworks-OKN13INxyuwe3LaX-Y1gbKg-t500x500.jpg" alt />
                            </div>
                            <div className="song-item__text">
                                <p>Nơi tình yêu bắt đầu</p>
                                <p>
                                    <a href="./artist-details.html">Bùi Anh Tuấn</a>
                                </p>
                            </div>
                        </td>
                        <td>Ballad</td>
                        <td>1/1/2022</td>
                        <td>4:22</td>
                        <td style={{ textAlign: "right" }}>9.999.999</td>
                        <td className="song-item__action">
                            {/* <i class="bx bx-heart"></i> */}
                            <i className="bx bxs-heart icon__heart--active" />
                            <i className="bx bx-dots-horizontal-rounded" />
                        </td>
                    </tr>
                    <tr className="song-item">
                        <td style={{ textAlign: "center" }}>
                            <span>2</span>
                            <i className="bx bx-play song-item__btn-play-pause" />
                        </td>
                        <td className="song-item__details">
                            <div className="song-item__image">
                                <img
                                    src="https://static-images.vnncdn.net/files/publish/theres-no-one-at-all-ra-mat-tu-284-da-gay-phan-ung-du-doi-6c2f328e52de4ced95f347db6667f6d4.jpg"
                                    alt
                                />
                            </div>
                            <div className="song-item__text">
                                <p>There's not one at all</p>
                                <p>Sơn Tùng M-TP</p>
                            </div>
                        </td>
                        <td>Ballad</td>
                        <td>1/1/2022</td>
                        <td>2:22</td>
                        <td style={{ textAlign: "right" }}>8.888.888</td>
                        <td className="song-item__action">
                            <i className="bx bx-heart" />
                            <i className="bx bx-dots-horizontal-rounded" />
                        </td>
                    </tr>
                    <tr className="song-item">
                        <td style={{ textAlign: "center" }}>
                            <span>3</span>
                            <i className="bx bx-play song-item__btn-play-pause" />
                        </td>
                        <td className="song-item__details">
                            <div className="song-item__image">
                                <img
                                    src="https://static-images.vnncdn.net/files/publish/theres-no-one-at-all-ra-mat-tu-284-da-gay-phan-ung-du-doi-6c2f328e52de4ced95f347db6667f6d4.jpg"
                                    alt
                                />
                            </div>
                            <div className="song-item__text">
                                <p>There's not one at all</p>
                                <p>Sơn Tùng M-TP</p>
                            </div>
                        </td>
                        <td>Rap</td>
                        <td>1/1/2022</td>
                        <td>2:22</td>
                        <td style={{ textAlign: "right" }}>7.777.777</td>
                        <td className="song-item__action">
                            <i className="bx bx-heart" />
                            <i className="bx bx-dots-horizontal-rounded" />
                        </td>
                    </tr>
                    <tr className="song-item">
                        <td style={{ textAlign: "center" }}>
                            <span>4</span>
                            <i className="bx bx-play song-item__btn-play-pause" />
                        </td>
                        <td className="song-item__details">
                            <div className="song-item__image">
                                <img
                                    src="https://static-images.vnncdn.net/files/publish/theres-no-one-at-all-ra-mat-tu-284-da-gay-phan-ung-du-doi-6c2f328e52de4ced95f347db6667f6d4.jpg"
                                    alt
                                />
                            </div>
                            <div className="song-item__text">
                                <p>There's not one at all</p>
                                <p>Sơn Tùng M-TP</p>
                            </div>
                        </td>
                        <td>Pop</td>
                        <td>1/1/2022</td>
                        <td>2:22</td>
                        <td style={{ textAlign: "right" }}>6.666.666</td>
                        <td className="song-item__action">
                            <i className="bx bx-heart" />
                            <i className="bx bx-dots-horizontal-rounded" />
                        </td>
                    </tr>
                    <tr className="song-item">
                        <td style={{ textAlign: "center" }}>
                            <span>5</span>
                            <i className="bx bx-play song-item__btn-play-pause" />
                        </td>
                        <td className="song-item__details">
                            <div className="song-item__image">
                                <img
                                    src="https://static-images.vnncdn.net/files/publish/theres-no-one-at-all-ra-mat-tu-284-da-gay-phan-ung-du-doi-6c2f328e52de4ced95f347db6667f6d4.jpg"
                                    alt
                                />
                            </div>
                            <div className="song-item__text">
                                <p>There's not one at all</p>
                                <p>Sơn Tùng M-TP</p>
                            </div>
                        </td>
                        <td>Ballad</td>
                        <td>1/1/2022</td>
                        <td>2:22</td>
                        <td style={{ textAlign: "right" }}>5.555.555</td>
                        <td className="song-item__action">
                            <i className="bx bx-heart" />
                            <i className="bx bx-dots-horizontal-rounded" />
                        </td>
                    </tr>
                    <tr className="song-item">
                        <td style={{ textAlign: "center" }}>
                            <span>6</span>
                            <i className="bx bx-play song-item__btn-play-pause" />
                        </td>
                        <td className="song-item__details">
                            <div className="song-item__image">
                                <img
                                    src="https://static-images.vnncdn.net/files/publish/theres-no-one-at-all-ra-mat-tu-284-da-gay-phan-ung-du-doi-6c2f328e52de4ced95f347db6667f6d4.jpg"
                                    alt
                                />
                            </div>
                            <div className="song-item__text">
                                <p>There's not one at all</p>
                                <p>Sơn Tùng M-TP</p>
                            </div>
                        </td>
                        <td>Rap</td>
                        <td>1/1/2022</td>
                        <td>2:22</td>
                        <td style={{ textAlign: "right" }}>4.444.444</td>
                        <td className="song-item__action">
                            <i className="bx bx-heart" />
                            <i className="bx bx-dots-horizontal-rounded" />
                        </td>
                    </tr>
                    <tr className="song-item">
                        <td style={{ textAlign: "center" }}>
                            <span>7</span>
                            <i className="bx bx-play song-item__btn-play-pause" />
                        </td>
                        <td className="song-item__details">
                            <div className="song-item__image">
                                <img
                                    src="https://static-images.vnncdn.net/files/publish/theres-no-one-at-all-ra-mat-tu-284-da-gay-phan-ung-du-doi-6c2f328e52de4ced95f347db6667f6d4.jpg"
                                    alt
                                />
                            </div>
                            <div className="song-item__text">
                                <p>There's not one at all</p>
                                <p>Sơn Tùng M-TP</p>
                            </div>
                        </td>
                        <td>Pop</td>
                        <td>1/1/2022</td>
                        <td>2:22</td>
                        <td style={{ textAlign: "right" }}>3.333.333</td>
                        <td className="song-item__action">
                            <i className="bx bx-heart" />
                            <i className="bx bx-dots-horizontal-rounded" />
                        </td>
                    </tr>
                    <tr className="song-item">
                        <td style={{ textAlign: "center" }}>
                            <span>8</span>
                            <i className="bx bx-play song-item__btn-play-pause" />
                        </td>
                        <td className="song-item__details">
                            <div className="song-item__image">
                                <img
                                    src="https://static-images.vnncdn.net/files/publish/theres-no-one-at-all-ra-mat-tu-284-da-gay-phan-ung-du-doi-6c2f328e52de4ced95f347db6667f6d4.jpg"
                                    alt
                                />
                            </div>
                            <div className="song-item__text">
                                <p>There's not one at all</p>
                                <p>Sơn Tùng M-TP</p>
                            </div>
                        </td>
                        <td>Ballad</td>
                        <td>1/1/2022</td>
                        <td>2:22</td>
                        <td style={{ textAlign: "right" }}>2.222.222</td>
                        <td className="song-item__action">
                            <i className="bx bx-heart" />
                            <i className="bx bx-dots-horizontal-rounded" />
                        </td>
                    </tr>
                    <tr className="song-item">
                        <td style={{ textAlign: "center" }}>
                            <span>9</span>
                            <i className="bx bx-play song-item__btn-play-pause" />
                        </td>
                        <td className="song-item__details">
                            <div className="song-item__image">
                                <img
                                    src="https://static-images.vnncdn.net/files/publish/theres-no-one-at-all-ra-mat-tu-284-da-gay-phan-ung-du-doi-6c2f328e52de4ced95f347db6667f6d4.jpg"
                                    alt
                                />
                            </div>
                            <div className="song-item__text">
                                <p>There's not one at all</p>
                                <p>Sơn Tùng M-TP</p>
                            </div>
                        </td>
                        <td>Rap</td>
                        <td>1/1/2022</td>
                        <td>2:22</td>
                        <td style={{ textAlign: "right" }}>1.111.111</td>
                        <td className="song-item__action">
                            <i className="bx bx-heart" />
                            <i className="bx bx-dots-horizontal-rounded" />
                        </td>
                    </tr>
                    <tr className="song-item">
                        <td style={{ textAlign: "center" }}>
                            <span>10</span>
                            <i className="bx bx-play song-item__btn-play-pause" />
                        </td>
                        <td className="song-item__details">
                            <div className="song-item__image">
                                <img
                                    src="https://static-images.vnncdn.net/files/publish/theres-no-one-at-all-ra-mat-tu-284-da-gay-phan-ung-du-doi-6c2f328e52de4ced95f347db6667f6d4.jpg"
                                    alt
                                />
                            </div>
                            <div className="song-item__text">
                                <p>There's not one at all</p>
                                <p>Sơn Tùng M-TP</p>
                            </div>
                        </td>
                        <td>Rap</td>
                        <td>1/1/2022</td>
                        <td>2:22</td>
                        <td style={{ textAlign: "right" }}>999.999</td>
                        <td className="song-item__action">
                            <i className="bx bx-heart" />
                            <i className="bx bx-dots-horizontal-rounded" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ListSong;
