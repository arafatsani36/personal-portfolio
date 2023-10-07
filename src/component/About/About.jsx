import about from '../../assets/banner.jpg'
import './About.css'

const About = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-4 mt-5' id='about'>
            <h2 className=' text-3xl font-bold primary-text-color'>About <span className='secendare-text-color'>Me</span></h2>
            <div className="about-image">
                <img  src={about} alt="" />
                <span className='circle-span'></span>
            </div>
            <div>
                <h2 className='secendare-text-color font-bold text-xl text-center my-3'>FRONT-END WEB DEVELOPER</h2>
                <p className='primary-text-color text-base text-center my-3 about-description'>I am a passionate and dedicated junior front-end web developer with a strong foundation in HTML, CSS, BOOTSTRAP, TAILWIND CSS, and JAVASCRIPT. I have experience working with teams. And my main goal is to successfully contribute to a team.</p>
            </div>
        </div>
    );
};

export default About;