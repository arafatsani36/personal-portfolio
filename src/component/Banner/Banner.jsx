import banner from '../../assets/banner.jpg'
import './Banner.css'
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaGithub} from "react-icons/fa";
const Banner = () => {
   
    return (
           
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:justify-between py-5'>
                <div className='content'>
                    <h4 className='primary-text-color text-2xl font-semibold mb-2'>Hello It's Me</h4>
                    <h2 className='primary-text-color text-4xl font-bold mb-4'>JAKARIA HOSSAIN SANI</h2>
                    <p className='primary-text-color'>I'm a <span className="secendare-text-color text-sm"><TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Web Developer',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Javascript Developer',
                        1000,
                        'React Web Developer',
                        1000
                    ]}
                    wrapper="span"
                    speed={60}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                    /></span></p>

                    <div className='mt-5 social-media'>
                        <li><a href="https://www.facebook.com/profile.php?id=100090507447954" target='_blank' rel="noopener noreferrer"><FaFacebook></FaFacebook></a></li>
                        <li><a href="https://www.instagram.com/_sani_bruh_/?igshid=NTc4MTIwNjQ2YQ%3D%3D" target='_blank' rel="noopener noreferrer"><FaInstagram></FaInstagram></a></li>
                        <li><a href="https://www.linkedin.com/in/jakaria-hossain-sani-bb5466280/" target='_blank' rel="noopener noreferrer"><FaLinkedinIn></FaLinkedinIn></a></li>
                        <li><a href="https://twitter.com/sani_bruh_?t=XU_jw7g4YFqAr2W4YfI7Mw&s=09" target='_blank' rel="noopener noreferrer"><FaTwitter></FaTwitter></a></li>
                        <li><a href="https://github.com/arafatsani36" target='_blank' rel="noopener noreferrer" ><FaGithub></FaGithub></a></li>
                    </div>
                
            
                </div>
                <div>
                    <img className='banner-img' src={banner} alt="" />
                </div>
            

            
        </div>
            
       
    );
};

export default Banner;