import './Contact.css'
const Contact = () => {
    return (
        
        <div id="contact" className="mt-20">
            <h2 className=' text-3xl font-bold primary-text-color text-center'>Contact <span className='secendare-text-color'>Me</span></h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className='contact-section'>
               
                    <h2 className='contact-header font-bold text-lg secendare-text-color'>Contact on Phone</h2>
                    <p className='contact-info'>+8801641380575</p>
                </div>
                <div className='contact-section'>
                    <h2 className='contact-header font-bold text-lg secendare-text-color'>Contact on Email</h2>
                    <p className='contact-info'>jakariahossainsani@gmail.com</p>
                </div>
                <div className='contact-section'>
                    <h2 className='contact-header font-bold text-lg secendare-text-color'>Contact on Address</h2>
                    <p className='contact-info'>Uttara, Dhaka, Bangladesh</p>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
                <input type="text" name="name" id="" className='contact-box'  placeholder='Your Name'/>
                <input type="email" name="email" id="" className='contact-box'  placeholder='Your Email'/>
                <textarea name="" id="" cols="20" rows="7" placeholder='Your Massage' className='contact-box'></textarea>
                <input type="submit" value="submit" className='submit'/>
            </div>
        </div>
        </div>
    );
};

export default Contact;