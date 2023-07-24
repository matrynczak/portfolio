import './MyWork.css';
import { getProjects } from './projectsList';



function MyWork({  }) {

    const projects = getProjects();
    console.log("AAA", projects[0])

    const renderProjectsList = (list) => {
        return (
            <ul className='projects-list'>
                {list.map(project => (
                    <li className='project'>
                        <img className='project-image' src={require(`../myWork/projectImages/${project.image}`)}></img>
                        <div className='project-info'>
                            <div className='project-header'>
                                <h3>{project.title}</h3>
                                <div className='project-icons'>
                                    <a className='github-icon' href={project.github}>
                                        <img src={require('../../images/github-mark.png')}></img>    
                                    </a>
                                    <a className='project-page' href={project.url}>
                                        <img src={require('../../images/link-icon.png')}></img>   
                                    </a>    
                                </div>
                            </div>
                            <p className='project-desc'>
                                    {project.desc}
                                </p>
                        </div>
                    </li>
                )
                )}
            </ul>
            )
    }

	return (
		<div className="my-work-container">
            {/* <div> */}
            
            <div className='projects-container'>
            <h2>My Work</h2>
                {renderProjectsList(projects)}
            </div>
            </div>
			
		// </div>
	);
}

export default MyWork;
