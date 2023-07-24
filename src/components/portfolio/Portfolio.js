import './Portfolio.css';
import AboutMe from '../aboutMe/AboutMe';
import ContactMe from '../contactMe/ContactMe';
import MyWork from '../myWork/MyWork';

function Portfolio({  }) {
	return (
		<div className="portfolio-container">
			<AboutMe />
			<MyWork />
            <ContactMe />
		</div>
	);
}

export default Portfolio;
