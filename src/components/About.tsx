import './About.css';

function About() {
    return (
        <article id="about">
            <p className='section-title'>About me</p>

            <div className="section-content">
                <div className="details">
                    <p>My name is Rana Rosihan, an undergraduate Computer Science/Informatika student at Universitas Siber Muhammadiyah in Indonesia. With an optimistic outlook and a passion for technology as well as development from a young age, I am quite interested in all manners of topics such as game development, web development, and software development.</p>

                    <p>Though it does not end here! Aside from interest, I have accumulated understanding in the topics of web development from PHP to Javascript and frameworks such as <span className='highlight-react'>React</span> and <span className='highlight-laravel'>Laravel</span>. I am also quite versed in game development, such as Unity Engine and Godot Engine. Naturally, I'm quite interested in learning further more of the scopes within web development and game development.</p>

                    <p>At the moment, I'm currently looking for an opportunity to apply to either a junior position or an internship in web development or game development as I do not have much work experience. <b>However, due to <i>conditions</i>, I cannot accept an on-site or hybrid position.</b></p>

                    <div className="actions">
                        <a href="#projects">
                            <button>Projects</button>
                        </a>

                        <a href="#contact">
                            <button>Contact</button>
                        </a>
                    </div>
                </div>

                <div id="rocket-showcase">
                    {/* TODO: Three JS */}

                </div>
            </div>
        </article>
    );
}

export default About;