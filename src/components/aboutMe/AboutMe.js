import './AboutMe.css';

function AboutMe({  }) {
	return (
		<div className="about-me-container">
            <div className='about-me-text'>
            <div className='about-me-image'>
                <p className='name'>MATEUSZ RYNCZAK</p>
            </div>
                <h2>About Me</h2>
                <p className='about-me-desc'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptaQuis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                <div className='social-media-icons'>
                    <a target={'_blank'} href='https://www.facebook.com/mateusz.rynczak/'>
                        <img className='fb-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" /> 
                    </a>
                    <a target={'_blank'} href='https://www.linkedin.com/in/mateusz-rynczak-207439a6/'>
                    <img className='li-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
                    </a>
                </div>
                
            </div>
		</div>
	);
}

export default AboutMe;
