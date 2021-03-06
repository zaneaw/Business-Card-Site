import React from "react";


export default function Header() {
    return (
        <div>
            <div className="pic--div">
                <img src="assets/images/zane-big.jpg" alt="Zane" />
            </div>
            <div className="header-content--div">
                <h3>Zane A. Wilson</h3>
                <h5>Full Stack Developer</h5>
                <a href="https://www.zane-wilson.com/" target="_blank" rel="noreferrer">zane-wilson.com</a>
                <div className="button--div">
                    <a href="mailto:wilsonzanea@gmail.com?subject=Digital%20Business%20Card" target="_blank" rel="noreferrer">
                        <button type="button" className="header--button em--button">
                            <i className="fa-solid fa-envelope"></i>
                            <p>Email</p>
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/zaneaw/" target="_blank" rel="noreferrer">
                        <button type="button" className="header--button li--button">
                            <i className="fa-brands fa-linkedin"></i>
                            <p>LinkedIn</p>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
