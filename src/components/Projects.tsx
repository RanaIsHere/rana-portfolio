import React, { useState } from 'react';
import ProjectFragment from './ProjectFragment';
import './Projects.css';

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("Academic Work");

    const projects = [
        {
            name: "Windblade",
            category: "Academic Work",
            tech: "PHP, Laravel, TailwindCSS, DaisyUI, SQL",
            description: "This is one of the largest academic work undertaken, with CRUD applied throughout the project. It is a web application that is used to manage the data of a laundromat franchise, hypothetically.",
            githubLink: "https://github.com/RanaIsHere/windblade",
            hasWebsite: false,
        },
        {
            name: "Xenoterminated",
            category: "Personal Work",
            tech: "Godot Engine, Aseprite, Audacity",
            description: "This one is my first personal (released) game under the guise of a short-term game jam. It is a 2D top-down shooter game, set on another planet.",
            githubLink: "https://github.com/RanaIsHere/xenoterminated",
            hasWebsite: true,
            websiteLink: "https://sirrana.itch.io/xenoterminated",
        },
        {
            name: "Budgetpacks",
            category: "Personal Work",
            tech: "NextJS, React, TailwindCSS",
            description: "A recent project of mine to learn the associated frameworks and newer database systems such as GraphQL. It is a web application that users can use to maange their personal finances and track their spending. At the moment, it is still work in progress.",
            githubLink: "https://github.com/RanaIsHere/budgetpacks",
            hasWebsite: false
        },
        {
            name: "Portfolio",
            category: "Personal Work",
            tech: "Vite, React.JS",
            description: "This is the website you are currently on! It's a personal portfolio website to be used during showcases and professional work.",
            githubLink: "https://github.com/RanaIsHere/rana-portfolio",
            hasWebsite: true,
            websiteLink: "https://rana-rosihan-portfolio.vercel.app/"
        }
    ];

    const projectFragments = selectedCategory == 'Academic Work' ? projects.filter(project => project.category == 'Academic Work') : projects.filter(project => project.category == 'Personal Work');

    return (
        <section id="projects">
            <p className='section-title'>Projects</p>

            <div className="projects-content">
                <div className="actions">
                    <button onClick={() => setSelectedCategory("Academic Work")}>Academic Work</button>
                    <button onClick={() => setSelectedCategory("Personal Work")}>Personal Work</button>
                </div>

                <div className="projects-list">
                    {projectFragments.map((project, idx) => (
                        <ProjectFragment
                            key={idx}
                            name={project.name}
                            category={project.category}
                            tech={project.tech}
                            description={project.description}
                            githubLink={project.githubLink}
                            hasWebsite={project.hasWebsite}
                            websiteLink={project.websiteLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;