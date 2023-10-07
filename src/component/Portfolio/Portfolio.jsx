import './Portfolio.css'
import img1 from '../../assets/im1.jpg'
import img2 from '../../assets/im2.jpg'
import img3 from '../../assets/im3.jpg'
import img4 from '../../assets/im4.jpg'
import img5 from '../../assets/im5.jpg'


const Portfolio = () => {
    return (
        <div id="portfolio" className='mt-20'>
             <h2 className=' text-3xl font-bold primary-text-color text-center'>My <span className='secendare-text-color'>Portfolio</span></h2>
 
                <div className='portfolio-container grid md:grid-cols-2  lg:grid-cols-3 gap-4 mt-10'>
                    <div data-aos="zoom-in-up">
                    <div className='box box1'> 
                    </div>
                    <h2 className='text-lg font-bold primary-text-color mt-4 ml-2 md:ml-0 lg:ml-0'>JobLinker<span className=' text-sky-600'>(Team Project)</span> - <span className=' text-rose-600'>(Mern Stack)</span></h2>
                    <h4 className=' text-lg font-bold primary-text-color mt-2 ml-2 md:ml-0 lg:ml-0'>Technology: <span className=' text-rose-600'>Next.Js, Tailwind, Daisy Ui, Axios, TanStack, Firebase, MongoDB, Vercel</span></h4>
                        <div className='project-link flex ml-2 md:ml-0 lg:ml-0'>
                            <a className='link' href="https://job-linker-seven.vercel.app/" target='_blank' rel="noopener noreferrer">Live Demo</a>
                            <a className='ml-2 link' href="https://github.com/Galib24/JobLinker" target='_blank' rel="noopener noreferrer">Github Link</a>
                        </div>
                    </div>
                    

                    <div data-aos="zoom-in-up">
                        <div className='box box2'>
                        </div>
                        <h2 className='text-lg font-bold primary-text-color mt-4 ml-2 md:ml-0 lg:ml-0'>Toy Shop - <span className=' text-rose-600'>(Mern Stack)</span></h2>
                            <h4 className=' text-lg font-bold primary-text-color mt-2 ml-2 md:ml-0 lg:ml-0'>Technology: <span className='   text-rose-600'>React, Tailwind, Daisy Ui, Axios, TanStack, Firebase, Express.js, MongoDB</span></h4>
                            <div className='project-link flex ml-2 md:ml-0 lg:ml-0'>
                            <a className='link' href="https://toy-sports-car-clicnt.web.app" target='_blank' rel="noopener noreferrer">Live Demo</a>
                            <a className='ml-2 link' href="https://github.com/arafatsani36/toy-sports-car-clicnt" target='_blank' rel="noopener noreferrer">Client Github Link</a>
                            <a className='ml-2 link' href="https://github.com/arafatsani36/toy-sports-car-server" target='_blank' rel="noopener noreferrer">Server Github Link</a>
                            </div>
                    </div>
                    
                    <div data-aos="zoom-in-up">
                        <div className='box box3'>
                        </div>
                        <h2 className='text-lg font-bold primary-text-color mt-4 ml-2 md:ml-0 lg:ml-0'>SimpleHired - <span className=' text-rose-600'>(Frontend)</span></h2>
                            <h4 className=' text-lg font-bold primary-text-color mt-2 ml-2 md:ml-0 lg:ml-0'>Technology: <span className='   text-rose-600'>React, Tailwind, Daisy Ui</span></h4>
                            <div className='project-link flex ml-2 md:ml-0 lg:ml-0'>
                            <a className='link' href="https:https://simplehired.netlify.app/" target='_blank' rel="noopener noreferrer">Live Demo</a>
                            <a className='ml-2 link' href="https://github.com/arafatsani36/simplyHired" target='_blank' rel="noopener noreferrer">Github Link</a>
                            </div>
                    </div>

   
                   
                </div>


        </div>
    );
};

export default Portfolio;