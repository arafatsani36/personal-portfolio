import 'react-circular-progressbar/dist/styles.css';
import './Skill.css'


const Skill = () => {
    return (
        <div id='skill' className='mt-20'>
        
        <h2 className=' text-3xl font-bold primary-text-color text-center'>My <span className='secendare-text-color'>Skill</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div data-aos="fade-right">
            <h2 className=' text-center text-lg font-bold mt-10 primary-text-color'>Client Side</h2>
            <div className='progressbar'>
                <span className='title'>HTML</span>
                <div className='skill-bar'>
                    <span className='skill-per html'>
                        <span className='tooltip'>90%</span>
                    </span>
                </div>
            </div>

            <div className='progressbar'>
                <span className='title'>CSS</span>
                <div className='skill-bar'>
                    <span className='skill-per css'>
                        <span className='tooltip'>80%</span>
                    </span>
                </div>
            </div>

            <div className='progressbar'>
                <span className='title'>BOOTSTRAP</span>
                <div className='skill-bar'>
                    <span className='skill-per bootstrap'>
                        <span className='tooltip'>90%</span>
                    </span>
                </div>
            </div>

            <div className='progressbar'>
                <span className='title'>TAILWIND CSS</span>
                <div className='skill-bar'>
                    <span className='skill-per tailwind'>
                        <span className='tooltip'>90%</span>
                    </span>
                </div>
            </div>

            <div className='progressbar'>
                <span className='title'>JAVASCRIPT</span>
                <div className='skill-bar'>
                    <span className='skill-per javascript'>
                        <span className='tooltip'>70%</span>
                    </span>
                </div>
            </div>

            <div className='progressbar'>
                <span className='title'>REACT</span>
                <div className='skill-bar'>
                    <span className='skill-per react'>
                        <span className='tooltip'>70%</span>
                    </span>
                </div>
            </div>
        </div>

        <div>
            <h2 className=' text-center text-lg font-bold mt-10 primary-text-color'>Server Side</h2>
            <div className='progressbar'>
                <span className='title'>FIREBASE</span>
                <div className='skill-bar'>
                    <span className='skill-per firebase'>
                        <span className='tooltip'>50%</span>
                    </span>
                </div>
            </div>

            <div className='progressbar'>
                <span className='title'>MONGODB</span>
                <div className='skill-bar'>
                    <span className='skill-per mongodb'>
                        <span className='tooltip'>50%</span>
                    </span>
                </div>
            </div>
            
        </div>

        <div data-aos="fade-left">
            <h2 className=' text-center text-lg font-bold mt-10 primary-text-color'>Tools</h2>
            <div className='progressbar'>
                <span className='title'>Figma</span>
                <div className='skill-bar'>
                    <span className='skill-per figma'>
                        <span className='tooltip'>90%</span>
                    </span>
                </div>
            </div>

            <div className='progressbar'>
                <span className='title'>VS Code</span>
                <div className='skill-bar'>
                    <span className='skill-per vscode'>
                        <span className='tooltip'>90%</span>
                    </span>
                </div>
            </div>

            <div className='progressbar'>
                <span className='title'>Git</span>
                <div className='skill-bar'>
                    <span className='skill-per git'>
                        <span className='tooltip'>90%</span>
                    </span>
                </div>
            </div>

            <div className='progressbar'>
                <span className='title'>Github</span>
                <div className='skill-bar'>
                    <span className='skill-per github'>
                        <span className='tooltip'>90%</span>
                    </span>
                </div>
            </div>

            <div className='progressbar'>
                <span className='title'>Terminal</span>
                <div className='skill-bar'>
                    <span className='skill-per terminal'>
                        <span className='tooltip'>90%</span>
                    </span>
                </div>
            </div>
 
        </div>

        

        </div>
       
                
                
            
           
            
            



            
            
        </div>
    );
};

export default Skill;