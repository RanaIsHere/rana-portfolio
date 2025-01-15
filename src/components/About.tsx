import './About.css';

function About() {
    return (
        <article id="about">
            <p className='section-title'>About me</p>

            <div className="section-content">
                <div className="details">
                    <p>My name is <b>Rana Rosihan</b>, an undergraduate Computer Science/Informatika student at Universitas Siber Muhammadiyah in Indonesia. With a passionate outlook for technology and development from a young age, I am quite interested in all manners of topics related to <b>game development</b>, <b>web development</b>, and <b>software development</b>.</p>

                    <p>Aside from interest, I've accumulated practical skills and knowledge in the topics of web development, working with techs such as <span className='highlight-react'>React</span> and <span className='highlight-laravel'>Laravel</span>. I have also gathered enough knowledge in game development, such as Unity Engine and Godot Engine. Naturally, I'm quite eager to deepen my knowledge and learning further more of the scopes within web development and game development.</p>

                    <p>At the moment, I'm actively seeking for an opportunity to apply to either a junior position or an internship in web development or game development. However, due to certain <i>constraints</i> and <i>conditions</i>, I am only available for <b>remote positions</b> at this time.</p>

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