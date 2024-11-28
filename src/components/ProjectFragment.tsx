import './Projects.css';

function ProjectFragment(props: { name: string, category: string, tech: string, description: string, githubLink: string, hasWebsite: boolean, websiteLink?: string }) {
    return (
        <div className="project-fragment">
            <div className="project-fragment-title">
                <p className='project-name'>{props.name}</p>
                <p className='project-tech'>{props.tech}</p>
            </div>

            <div className="project-fragment-details">
                <p>Type: <span className='highlight-laravel'>{props.category}</span></p>
                <p>{props.description}</p>
            </div>

            <div className="project-fragment-actions">
                <a target="_blank" href={props.githubLink}><button>Github</button></a>
                {props.hasWebsite && <a href={props.websiteLink}><button>Website</button></a>}
            </div>
        </div>
    );
}

export default ProjectFragment;