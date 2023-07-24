import './ContactMe.css';

function ContactMe({  }) {
	return (
		<div className="contact-me-container">
			<div className='contact-info'>
                <h2>Contact me</h2>
                <p className='contact-enhancement'>Please get in touch if you think our work could me mutually beneficial!</p>
                <p className='address-line-1'>1234 Random Road</p>
                <p className='address-line-2'>Random Town, Alamaba 12345</p>
                <div className='contact-phone-info'>
                    <img className='phone-icon' src={require('../../images/phone.png')}></img>
                    <span>111-111-111</span>
                </div>
                <div className='contact-mail-info'>
                    <img className='mail-icon' src={require('../../images/mail.png')} ></img>
                    <span>mateusz.rynczak@non-mail.com</span>
                </div>
                <div className='social-media-icons-contact'>
                    <a target={'_blank'} href='https://www.facebook.com/mateusz.rynczak/'>
                        <img className='fb-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" /> 
                    </a>
                    <a target={'_blank'} href='https://www.linkedin.com/in/mateusz-rynczak-207439a6/'>
                    <img className='li-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
                    </a>
                </div>
            </div>
            <div className='contact-image-wrapper'>
                {/* <img className='contact-image' src={require('../../images/contact-image.jpg')}></img> */}
                <picture>
                    <source media="(max-width:768px)" srcset={require('../../images/contact-image-tablet-4.jpg')}></source>
                    {/* <source media="(min-width:465px)" srcset="img_white_flower.jpg"></source> */}
                    <img className='contact-image' src={require('../../images/contact-image.jpg')}></img>
                </picture>
                
                
                
            </div>
		</div>
	);
}

export default ContactMe;


