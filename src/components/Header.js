import React from "react";


export default function Header() {
    return (
        <div className="main--div">
            <img src="assets/images/zane-big.jpg" alt="Zane" />
            <h3>Zane A. Wilson</h3>
            <h5>Full Stack Developer</h5>
            <a href="https://www.zane-wilson.com/" target="_blank" rel="noreferrer">zane-wilson.com</a>
            <div className="button--div">
                <a href="mailto:wilsonzanea@gmail.com" target="_blank" rel="noreferrer">
                    <button type="button" className="header--button em--button">
                        <i className="fa-solid fa-envelope"></i>
                        <p>Email</p>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/zaneaw/" target="_blank" rel="noreferrer">
                    <button type="link" className="header--button li--button">
                        <i className="fa-brands fa-linkedin"></i>
                        <p>LinkedIn</p>
                    </button>
                </a>
            </div>
        </div>
    );
}
