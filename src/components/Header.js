import React from "react";


export default function Header() {
    return (
        <div className="main--div">
            <img src="assets/images/zane-big.jpg" alt="Zane" />
            <h3>Zane A. Wilson</h3>
            <h5>Full Stack Web Developer</h5>
            <p>wilsonzanea@gmail.com</p>
            <div className="button--div">
                <button type="button" className="header--button em--button">
                    <i class="fas fa-envelope"></i>
                    <p>Email</p>
                </button>
                <button type="button" className="header--button li--button">
                    <img
                        src="assets/images/linkedin-brands.svg"
                        alt="linkedin logo"
                    />
                    <p>LinkedIn</p>
                </button>
            </div>
        </div>
    );
}
