import React from 'react';
import './Contact.css';


const Contact = () => {
    return (
        <div className="lg:h-screen lg:flex lg:items-center bg-[#ffffff] text-black" id="contact">
            <div data-aos="fade-right" data-aos-duration="500" className="pl-4 lg:pl-8 lg:ml-10">
                <img src="contact.gif" alt="contact" />
            </div>
            <form data-aos="zoom-in-down" data-aos-duration="500" className='mx-auto p-0 backdrop-blur-sm bg-white/40 rounded-md contact-in-mobile'
                action="https://formsubmit.co/fcaf6bdbb098719accdc6bc85bd20aca" method="POST">
                <div className='text-center'>
                    <p className='text-5xl pl-4 font-bold border-slate-900 pb-4'>
                        Contact Me
                    </p>
                    <div>
                        <input type="text" placeholder="Full Name" name="name" className="my-2 input input-bordered w-full  lg:w-[450px]" required />
                    </div>
                    <div>
                        <input type="text" placeholder="Email Address" name="email" className="my-2 input input-bordered w-full  lg:w-[450px]" required />
                    </div>
                    <div>
                        <input type="text" placeholder="Subject" name="subject" className="my-2 input input-bordered w-full  lg:w-[450px]" required />
                    </div>
                    <div>
                        <textarea type="text" className="my-2 textarea textarea-bordered w-full lg:w-[450px]" name="message" placeholder="Your message" required></textarea>
                    </div>
                    <button type="submit" className='btn rounded-md w-full'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
