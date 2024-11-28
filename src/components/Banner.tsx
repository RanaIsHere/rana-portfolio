import React, { useState, useEffect } from 'react';
import './Banner.css';

function Banner() {
    const roles = ['Laravel Developer', 'React Developer', 'Game Developer'];
    const [currentRole, setCurrentRole] = useState(0);
    const [fadeClass, setFadeClass] = useState("fadeIn");

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeClass("fadeOut");
            setTimeout(() => {
                setCurrentRole((currentRole + 1) % roles.length);
                setFadeClass("fadeIn");
            }, 1000);
        }, 2000);
        return () => clearInterval(interval);
    }, [currentRole, roles.length]);

    return (
        <section id="banner">
            <article className="profile">
                <h2>Hello, my name is Rana Rosihan!</h2>
                <p>a <span key={fadeClass} id="role" className={fadeClass}>{roles[currentRole]}.</span></p>
                <a href="#about">
                    <button>Learn more</button>
                </a>
            </article>

            <div className="brand-logo">
                <img src="brand-logo.png" alt="brand-logo" />
            </div>
        </section>
    );
}

export default Banner;