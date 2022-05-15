import React from "react";
import "./header.css";

export default function Header() {
    return (
        <div className="home-container__header">
            <div className="home-container__breadcrumb">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    {/* <li>Popular Songs</li> */}
                </ul>
            </div>
            <div className="home-container__user-login">
                <a className="user-login__image" href="#">
                    <img
                        src="http://res.cloudinary.com/toryobuyall/image/upload/v1652595182/tv-music/image-upload/avatar.jpg"
                        alt
                    />
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
    );
}
