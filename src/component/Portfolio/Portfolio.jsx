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
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                <div data-aos="zoom-in">
                    <img src={img1} alt="" />
                    <h2 className=' text-lg font-bold primary-text-color mt-4 '>Toy Stop</h2>
                    
                    <div className='project-link flex'>
                        <a className='link' href="https://toy-sports-car.web.app/" target='_blank' rel="noopener noreferrer">Live Demo</a>
                        <a className='ml-2 link' href="https://github.com/arafatsani36/toy-sports-car-clicnt" target='_blank' rel="noopener noreferrer">Client Link</a>
                        <a className='ml-2 link' href="https://github.com/arafatsani36/toy-sports-car-server" target='_blank' rel="noopener noreferrer">Server Link</a>
                       
                    </div>
                   
                </div>


                
                <div data-aos="zoom-in-up">
                    <img  src={img2} alt="" />
                    <h2 className=' text-lg font-bold primary-text-color mt-4'>Foodies</h2>
                    
                    <div className='project-link flex'>
                        <a className='link' href="https://foodies-client-side.web.app/" target='_blank' rel="noopener noreferrer">Live Demo</a>
                        <a className='ml-2 link' href="https://github.com/arafatsani36/foodies-client-side-project" target='_blank' rel="noopener noreferrer">Client Link</a>
                        <a className='ml-2 link' href="https://github.com/arafatsani36/foodies-server-side" target='_blank' rel="noopener noreferrer">Server Link</a>
                       
                    </div>
                   
                </div>

                <div data-aos="zoom-in-down">
                    <img  src={img3} alt="" />
                    <h2 className=' text-lg font-bold primary-text-color mt-4'>SimpleHired</h2>
                    
                    <div className='project-link flex'>
                        <a className='link' href="https://ubiquitous-salmiakki-25fb74.netlify.app/" target='_blank' rel="noopener noreferrer">Live Demo</a>
                        <a className='ml-2 link' href="https://github.com/arafatsani36/simplyHired" target='_blank' rel="noopener noreferrer">Client Link</a>
                    </div>
                   
                </div>

                <div data-aos="zoom-in">
                    <img  src={img4} alt="" />
                    <h2 className=' text-lg font-bold primary-text-color mt-4'>Food</h2>
                    
                    <div className='project-link flex'>
                        <a className='link' href="https://capable-jelly-75320a.netlify.app/" target='_blank' rel="noopener noreferrer">Live Demo</a>
                        <a className='ml-2 link' href="https://github.com/arafatsani36/Food-Restaurant" target='_blank' rel="noopener noreferrer">Client Link</a>
                    </div>
                   
                </div>

                <div data-aos="zoom-in-up">
                    <img  src={img5} alt="" />
                    <h2 className=' text-lg font-bold primary-text-color mt-4'>Knowledge Cafe</h2>
                    
                    <div className='project-link flex'>
                        <a className='link' href="https://imaginative-klepon-d70ce8.netlify.app/" target='_blank' rel="noopener noreferrer">Live Demo</a>
                        <a className='ml-2 link' href="https://github.com/arafatsani36/knowledge-cafe" target='_blank' rel="noopener noreferrer">Client Link</a>
                    </div>
                   
                </div>
                

            </div>
        </div>
    );
};

export default Portfolio;